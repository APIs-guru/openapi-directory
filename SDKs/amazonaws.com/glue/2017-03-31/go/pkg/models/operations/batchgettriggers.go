package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetTriggersXAmzTargetEnum string

const (
	BatchGetTriggersXAmzTargetEnumAwsGlueBatchGetTriggers BatchGetTriggersXAmzTargetEnum = "AWSGlue.BatchGetTriggers"
)

type BatchGetTriggersHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetTriggersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchGetTriggersRequest struct {
	Headers BatchGetTriggersHeaders
	Request shared.BatchGetTriggersRequest `request:"mediaType=application/json"`
}

type BatchGetTriggersResponse struct {
	BatchGetTriggersResponse  *shared.BatchGetTriggersResponse
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
