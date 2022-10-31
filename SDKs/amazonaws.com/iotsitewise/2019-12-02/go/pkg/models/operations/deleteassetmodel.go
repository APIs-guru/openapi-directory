package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAssetModelPathParams struct {
	AssetModelID string `pathParam:"style=simple,explode=false,name=assetModelId"`
}

type DeleteAssetModelQueryParams struct {
	ClientToken *string `queryParam:"style=form,explode=true,name=clientToken"`
}

type DeleteAssetModelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteAssetModelRequest struct {
	PathParams  DeleteAssetModelPathParams
	QueryParams DeleteAssetModelQueryParams
	Headers     DeleteAssetModelHeaders
}

type DeleteAssetModelResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	DeleteAssetModelResponse      *shared.DeleteAssetModelResponse
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
