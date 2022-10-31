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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
