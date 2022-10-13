package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetPropertyValueQueryParams struct {
	AssetID       *string `queryParam:"style=form,explode=true,name=assetId"`
	PropertyAlias *string `queryParam:"style=form,explode=true,name=propertyAlias"`
	PropertyID    *string `queryParam:"style=form,explode=true,name=propertyId"`
}

type GetAssetPropertyValueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssetPropertyValueRequest struct {
	QueryParams GetAssetPropertyValueQueryParams
	Headers     GetAssetPropertyValueHeaders
}

type GetAssetPropertyValueResponse struct {
	ContentType                   string
	GetAssetPropertyValueResponse *shared.GetAssetPropertyValueResponse
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
