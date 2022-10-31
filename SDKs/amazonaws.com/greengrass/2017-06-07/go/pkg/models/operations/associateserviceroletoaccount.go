package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateServiceRoleToAccountHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AssociateServiceRoleToAccountRequestBody struct {
	RoleArn string `json:"RoleArn"`
}

type AssociateServiceRoleToAccountRequest struct {
	Headers AssociateServiceRoleToAccountHeaders
	Request AssociateServiceRoleToAccountRequestBody `request:"mediaType=application/json"`
}

type AssociateServiceRoleToAccountResponse struct {
	AssociateServiceRoleToAccountResponse *shared.AssociateServiceRoleToAccountResponse
	BadRequestException                   *interface{}
	ContentType                           string
	InternalServerErrorException          *interface{}
	StatusCode                            int64
}
