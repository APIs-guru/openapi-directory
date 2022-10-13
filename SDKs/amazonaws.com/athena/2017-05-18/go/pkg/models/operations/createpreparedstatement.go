package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePreparedStatementXAmzTargetEnum string

const (
	CreatePreparedStatementXAmzTargetEnumAmazonAthenaCreatePreparedStatement CreatePreparedStatementXAmzTargetEnum = "AmazonAthena.CreatePreparedStatement"
)

type CreatePreparedStatementHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePreparedStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
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
