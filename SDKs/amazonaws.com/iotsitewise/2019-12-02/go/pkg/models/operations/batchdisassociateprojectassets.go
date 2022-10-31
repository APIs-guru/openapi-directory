package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateProjectAssetsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BatchDisassociateProjectAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchDisassociateProjectAssetsRequestBody struct {
	AssetIds    []string `json:"assetIds"`
	ClientToken *string  `json:"clientToken,omitempty"`
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
