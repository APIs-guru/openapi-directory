package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssetPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type UpdateAssetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAssetRequestBody struct {
	AssetName   string  `json:"assetName"`
	ClientToken *string `json:"clientToken"`
}

type UpdateAssetRequest struct {
	PathParams UpdateAssetPathParams
	Headers    UpdateAssetHeaders
	Request    UpdateAssetRequestBody `request:"mediaType=application/json"`
}

type UpdateAssetResponse struct {
	ConflictingOperationException  *interface{}
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateAssetResponse            *shared.UpdateAssetResponse
}
