package operations

type PostCreateNetworkACLEntryActionEnum string

const (
	PostCreateNetworkACLEntryActionEnumCreateNetworkACLEntry PostCreateNetworkACLEntryActionEnum = "CreateNetworkAclEntry"
)

type PostCreateNetworkACLEntryVersionEnum string

const (
	PostCreateNetworkACLEntryVersionEnumTwoThousandAndSixteen1115 PostCreateNetworkACLEntryVersionEnum = "2016-11-15"
)

type PostCreateNetworkACLEntryQueryParams struct {
	Action  PostCreateNetworkACLEntryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateNetworkACLEntryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateNetworkACLEntryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateNetworkACLEntryRequest struct {
	QueryParams PostCreateNetworkACLEntryQueryParams
	Headers     PostCreateNetworkACLEntryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateNetworkACLEntryResponse struct {
	ContentType string
	StatusCode  int64
}
