package operations

type PostReplaceNetworkACLAssociationActionEnum string

const (
	PostReplaceNetworkACLAssociationActionEnumReplaceNetworkACLAssociation PostReplaceNetworkACLAssociationActionEnum = "ReplaceNetworkAclAssociation"
)

type PostReplaceNetworkACLAssociationVersionEnum string

const (
	PostReplaceNetworkACLAssociationVersionEnumTwoThousandAndSixteen1115 PostReplaceNetworkACLAssociationVersionEnum = "2016-11-15"
)

type PostReplaceNetworkACLAssociationQueryParams struct {
	Action  PostReplaceNetworkACLAssociationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReplaceNetworkACLAssociationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReplaceNetworkACLAssociationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReplaceNetworkACLAssociationRequest struct {
	QueryParams PostReplaceNetworkACLAssociationQueryParams
	Headers     PostReplaceNetworkACLAssociationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReplaceNetworkACLAssociationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
