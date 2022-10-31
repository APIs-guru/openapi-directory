package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAssetPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type DeleteAssetQueryParams struct {
	ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
}

type DeleteAssetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteAssetRequest struct {
	PathParams  DeleteAssetPathParams
	QueryParams DeleteAssetQueryParams
	Headers     DeleteAssetHeaders
}

type DeleteAssetResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	DeleteAssetResponse           *shared.DeleteAssetResponse
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
