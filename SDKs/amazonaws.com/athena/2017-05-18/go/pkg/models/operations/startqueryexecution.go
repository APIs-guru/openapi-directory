package operations

import (
	"openapi/pkg/models/shared"
)

type StartQueryExecutionXAmzTargetEnum string

const (
	StartQueryExecutionXAmzTargetEnumAmazonAthenaStartQueryExecution StartQueryExecutionXAmzTargetEnum = "AmazonAthena.StartQueryExecution"
)

type StartQueryExecutionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartQueryExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartQueryExecutionRequest struct {
	Headers StartQueryExecutionHeaders
	Request shared.StartQueryExecutionInput `request:"mediaType=application/json"`
}

type StartQueryExecutionResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidRequestException   *interface{}
	StartQueryExecutionOutput *shared.StartQueryExecutionOutput
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
