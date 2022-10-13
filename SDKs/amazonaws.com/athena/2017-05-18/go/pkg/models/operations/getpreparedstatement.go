package operations

import (
	"openapi/pkg/models/shared"
)

type GetPreparedStatementXAmzTargetEnum string

const (
	GetPreparedStatementXAmzTargetEnumAmazonAthenaGetPreparedStatement GetPreparedStatementXAmzTargetEnum = "AmazonAthena.GetPreparedStatement"
)

type GetPreparedStatementHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPreparedStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetPreparedStatementRequest struct {
	Headers GetPreparedStatementHeaders
	Request shared.GetPreparedStatementInput `request:"mediaType=application/json"`
}

type GetPreparedStatementResponse struct {
	ContentType                string
	GetPreparedStatementOutput *shared.GetPreparedStatementOutput
	InternalServerException    *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
