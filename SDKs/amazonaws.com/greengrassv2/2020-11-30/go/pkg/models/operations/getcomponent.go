package operations

import (
	"openapi/pkg/models/shared"
)

type GetComponentPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=arn"`
}

type GetComponentRecipeOutputFormatEnum string

const (
	GetComponentRecipeOutputFormatEnumJSON GetComponentRecipeOutputFormatEnum = "JSON"
	GetComponentRecipeOutputFormatEnumYaml GetComponentRecipeOutputFormatEnum = "YAML"
)

type GetComponentQueryParams struct {
	RecipeOutputFormat *GetComponentRecipeOutputFormatEnum `queryParam:"style=form,explode=true,name=recipeOutputFormat"`
}

type GetComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetComponentRequest struct {
	PathParams  GetComponentPathParams
	QueryParams GetComponentQueryParams
	Headers     GetComponentHeaders
}

type GetComponentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetComponentResponse      *shared.GetComponentResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
