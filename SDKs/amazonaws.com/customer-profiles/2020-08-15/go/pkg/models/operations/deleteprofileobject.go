package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProfileObjectPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type DeleteProfileObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteProfileObjectRequestBody struct {
	ObjectTypeName         string `json:"ObjectTypeName"`
	ProfileID              string `json:"ProfileId"`
	ProfileObjectUniqueKey string `json:"ProfileObjectUniqueKey"`
}

type DeleteProfileObjectRequest struct {
	PathParams DeleteProfileObjectPathParams
	Headers    DeleteProfileObjectHeaders
	Request    DeleteProfileObjectRequestBody `request:"mediaType=application/json"`
}

type DeleteProfileObjectResponse struct {
	AccessDeniedException       *interface{}
	BadRequestException         *interface{}
	ContentType                 string
	DeleteProfileObjectResponse *shared.DeleteProfileObjectResponse
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
