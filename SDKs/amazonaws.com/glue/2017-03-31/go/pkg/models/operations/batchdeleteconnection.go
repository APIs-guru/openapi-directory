package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteConnectionXAmzTargetEnum string

const (
	BatchDeleteConnectionXAmzTargetEnumAwsGlueBatchDeleteConnection BatchDeleteConnectionXAmzTargetEnum = "AWSGlue.BatchDeleteConnection"
)

type BatchDeleteConnectionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchDeleteConnectionRequest struct {
	Headers BatchDeleteConnectionHeaders
	Request shared.BatchDeleteConnectionRequest `request:"mediaType=application/json"`
}

type BatchDeleteConnectionResponse struct {
	BatchDeleteConnectionResponse *shared.BatchDeleteConnectionResponse
	ContentType                   string
	InternalServiceException      *interface{}
	OperationTimeoutException     *interface{}
	StatusCode                    int64
}
