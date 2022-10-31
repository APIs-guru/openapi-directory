package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePreparedStatementXAmzTargetEnum string

const (
	UpdatePreparedStatementXAmzTargetEnumAmazonAthenaUpdatePreparedStatement UpdatePreparedStatementXAmzTargetEnum = "AmazonAthena.UpdatePreparedStatement"
)

type UpdatePreparedStatementHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePreparedStatementXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdatePreparedStatementRequest struct {
	Headers UpdatePreparedStatementHeaders
	Request shared.UpdatePreparedStatementInput `request:"mediaType=application/json"`
}

type UpdatePreparedStatementResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdatePreparedStatementOutput map[string]interface{}
}
