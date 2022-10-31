package operations

type DisassociateAssetsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type DisassociateAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DisassociateAssetsRequestBody struct {
	ChildAssetID string  `json:"childAssetId"`
	ClientToken  *string `json:"clientToken,omitempty"`
	HierarchyID  string  `json:"hierarchyId"`
}

type DisassociateAssetsRequest struct {
	PathParams DisassociateAssetsPathParams
	Headers    DisassociateAssetsHeaders
	Request    DisassociateAssetsRequestBody `request:"mediaType=application/json"`
}

type DisassociateAssetsResponse struct {
	ConflictingOperationException *interface{}
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
