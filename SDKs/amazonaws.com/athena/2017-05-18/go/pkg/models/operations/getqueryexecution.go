package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryExecutionXAmzTargetEnum string

const (
	GetQueryExecutionXAmzTargetEnumAmazonAthenaGetQueryExecution GetQueryExecutionXAmzTargetEnum = "AmazonAthena.GetQueryExecution"
)

type GetQueryExecutionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetQueryExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetQueryExecutionRequest struct {
	Headers GetQueryExecutionHeaders
	Request shared.GetQueryExecutionInput `request:"mediaType=application/json"`
}

type GetQueryExecutionResponse struct {
	ContentType             string
	GetQueryExecutionOutput *shared.GetQueryExecutionOutput
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
