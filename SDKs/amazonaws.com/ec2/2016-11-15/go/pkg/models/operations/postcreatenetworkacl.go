package operations

type PostCreateNetworkACLActionEnum string

const (
	PostCreateNetworkACLActionEnumCreateNetworkACL PostCreateNetworkACLActionEnum = "CreateNetworkAcl"
)

type PostCreateNetworkACLVersionEnum string

const (
	PostCreateNetworkACLVersionEnumTwoThousandAndSixteen1115 PostCreateNetworkACLVersionEnum = "2016-11-15"
)

type PostCreateNetworkACLQueryParams struct {
	Action  PostCreateNetworkACLActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateNetworkACLVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateNetworkACLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateNetworkACLRequest struct {
	QueryParams PostCreateNetworkACLQueryParams
	Headers     PostCreateNetworkACLHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateNetworkACLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
