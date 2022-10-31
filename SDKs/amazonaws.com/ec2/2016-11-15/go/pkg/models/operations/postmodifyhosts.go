package operations

type PostModifyHostsActionEnum string

const (
	PostModifyHostsActionEnumModifyHosts PostModifyHostsActionEnum = "ModifyHosts"
)

type PostModifyHostsVersionEnum string

const (
	PostModifyHostsVersionEnumTwoThousandAndSixteen1115 PostModifyHostsVersionEnum = "2016-11-15"
)

type PostModifyHostsQueryParams struct {
	Action  PostModifyHostsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyHostsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyHostsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyHostsRequest struct {
	QueryParams PostModifyHostsQueryParams
	Headers     PostModifyHostsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyHostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
