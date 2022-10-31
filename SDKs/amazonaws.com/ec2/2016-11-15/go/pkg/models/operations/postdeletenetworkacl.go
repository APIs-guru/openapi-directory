package operations

type PostDeleteNetworkACLActionEnum string

const (
	PostDeleteNetworkACLActionEnumDeleteNetworkACL PostDeleteNetworkACLActionEnum = "DeleteNetworkAcl"
)

type PostDeleteNetworkACLVersionEnum string

const (
	PostDeleteNetworkACLVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkACLVersionEnum = "2016-11-15"
)

type PostDeleteNetworkACLQueryParams struct {
	Action  PostDeleteNetworkACLActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteNetworkACLVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteNetworkACLHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteNetworkACLRequest struct {
	QueryParams PostDeleteNetworkACLQueryParams
	Headers     PostDeleteNetworkACLHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteNetworkACLResponse struct {
	ContentType string
	StatusCode  int64
}
