package operations

import (
	"openapi/pkg/models/shared"
)

type StartQueryExecutionXAmzTargetEnum string

const (
	StartQueryExecutionXAmzTargetEnumAmazonAthenaStartQueryExecution StartQueryExecutionXAmzTargetEnum = "AmazonAthena.StartQueryExecution"
)

type StartQueryExecutionHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartQueryExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
