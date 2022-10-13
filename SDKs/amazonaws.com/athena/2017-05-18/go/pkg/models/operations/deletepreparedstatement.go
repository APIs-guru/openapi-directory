package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePreparedStatementXAmzTargetEnum string

const (
	DeletePreparedStatementXAmzTargetEnumAmazonAthenaDeletePreparedStatement DeletePreparedStatementXAmzTargetEnum = "AmazonAthena.DeletePreparedStatement"
)

type DeletePreparedStatementHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePreparedStatementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePreparedStatementRequest struct {
	Headers DeletePreparedStatementHeaders
	Request shared.DeletePreparedStatementInput `request:"mediaType=application/json"`
}

type DeletePreparedStatementResponse struct {
	ContentType                   string
	DeletePreparedStatementOutput map[string]interface{}
	InternalServerException       *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
