package operations

type DisassociateAssetsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type DisassociateAssetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateAssetsRequestBody struct {
	ChildAssetID string  `json:"childAssetId"`
	ClientToken  *string `json:"clientToken"`
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
