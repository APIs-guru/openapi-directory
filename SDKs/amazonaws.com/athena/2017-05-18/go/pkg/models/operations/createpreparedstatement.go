package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePreparedStatementXAmzTargetEnum string

const (
	CreatePreparedStatementXAmzTargetEnumAmazonAthenaCreatePreparedStatement CreatePreparedStatementXAmzTargetEnum = "AmazonAthena.CreatePreparedStatement"
)

type CreatePreparedStatementHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePreparedStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreatePreparedStatementRequest struct {
	Headers CreatePreparedStatementHeaders
	Request shared.CreatePreparedStatementInput `request:"mediaType=application/json"`
}

type CreatePreparedStatementResponse struct {
	ContentType                   string
	CreatePreparedStatementOutput map[string]interface{}
	InternalServerException       *interface{}
	InvalidRequestException       *interface{}
	StatusCode                    int64
}
