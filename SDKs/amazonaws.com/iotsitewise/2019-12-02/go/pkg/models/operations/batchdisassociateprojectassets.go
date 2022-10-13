package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateProjectAssetsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BatchDisassociateProjectAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDisassociateProjectAssetsRequestBody struct {
	AssetIds    []string `json:"assetIds"`
	ClientToken *string  `json:"clientToken"`
}

type BatchDisassociateProjectAssetsRequest struct {
	PathParams BatchDisassociateProjectAssetsPathParams
	Headers    BatchDisassociateProjectAssetsHeaders
	Request    BatchDisassociateProjectAssetsRequestBody `request:"mediaType=application/json"`
}

type BatchDisassociateProjectAssetsResponse struct {
	BatchDisassociateProjectAssetsResponse *shared.BatchDisassociateProjectAssetsResponse
	ContentType                            string
	InternalFailureException               *interface{}
	InvalidRequestException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
