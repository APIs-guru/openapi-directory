package operations

type PostDeleteNetworkACLEntryActionEnum string

const (
	PostDeleteNetworkACLEntryActionEnumDeleteNetworkACLEntry PostDeleteNetworkACLEntryActionEnum = "DeleteNetworkAclEntry"
)

type PostDeleteNetworkACLEntryVersionEnum string

const (
	PostDeleteNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkACLEntryVersionEnum = "2016-11-15"
)

type PostDeleteNetworkACLEntryQueryParams struct {
	Action  PostDeleteNetworkACLEntryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteNetworkACLEntryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteNetworkACLEntryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteNetworkACLEntryRequest struct {
	QueryParams PostDeleteNetworkACLEntryQueryParams
	Headers     PostDeleteNetworkACLEntryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteNetworkACLEntryResponse struct {
	ContentType string
	StatusCode  int64
}
