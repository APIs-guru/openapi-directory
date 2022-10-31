package operations

import (
	"openapi/pkg/models/shared"
)

type GetPreparedStatementXAmzTargetEnum string

const (
	GetPreparedStatementXAmzTargetEnumAmazonAthenaGetPreparedStatement GetPreparedStatementXAmzTargetEnum = "AmazonAthena.GetPreparedStatement"
)

type GetPreparedStatementHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetPreparedStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
