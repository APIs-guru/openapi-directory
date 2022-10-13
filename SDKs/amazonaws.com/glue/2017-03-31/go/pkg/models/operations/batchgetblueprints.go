package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetBlueprintsXAmzTargetEnum string

const (
	BatchGetBlueprintsXAmzTargetEnumAwsGlueBatchGetBlueprints BatchGetBlueprintsXAmzTargetEnum = "AWSGlue.BatchGetBlueprints"
)

type BatchGetBlueprintsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetBlueprintsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetBlueprintsRequest struct {
	Headers BatchGetBlueprintsHeaders
	Request shared.BatchGetBlueprintsRequest `request:"mediaType=application/json"`
}

type BatchGetBlueprintsResponse struct {
	BatchGetBlueprintsResponse *shared.BatchGetBlueprintsResponse
	ContentType                string
	InternalServiceException   *interface{}
	InvalidInputException      *interface{}
	OperationTimeoutException  *interface{}
	StatusCode                 int64
}
