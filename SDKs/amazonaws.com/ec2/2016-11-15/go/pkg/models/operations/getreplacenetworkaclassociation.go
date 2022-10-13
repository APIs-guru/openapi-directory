package operations

type GetReplaceNetworkACLAssociationActionEnum string

const (
	GetReplaceNetworkACLAssociationActionEnumReplaceNetworkACLAssociation GetReplaceNetworkACLAssociationActionEnum = "ReplaceNetworkAclAssociation"
)

type GetReplaceNetworkACLAssociationVersionEnum string

const (
	GetReplaceNetworkACLAssociationVersionEnumTwoThousandAndSixteen1115 GetReplaceNetworkACLAssociationVersionEnum = "2016-11-15"
)

type GetReplaceNetworkACLAssociationQueryParams struct {
	Action        GetReplaceNetworkACLAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AssociationID string                                     `queryParam:"style=form,explode=true,name=AssociationId"`
	DryRun        *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkACLID  string                                     `queryParam:"style=form,explode=true,name=NetworkAclId"`
	Version       GetReplaceNetworkACLAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetReplaceNetworkACLAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReplaceNetworkACLAssociationRequest struct {
	QueryParams GetReplaceNetworkACLAssociationQueryParams
	Headers     GetReplaceNetworkACLAssociationHeaders
}

type GetReplaceNetworkACLAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
