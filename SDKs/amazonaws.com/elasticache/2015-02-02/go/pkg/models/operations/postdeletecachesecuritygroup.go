package operations

type PostDeleteCacheSecurityGroupActionEnum string

const (
	PostDeleteCacheSecurityGroupActionEnumDeleteCacheSecurityGroup PostDeleteCacheSecurityGroupActionEnum = "DeleteCacheSecurityGroup"
)

type PostDeleteCacheSecurityGroupVersionEnum string

const (
	PostDeleteCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteCacheSecurityGroupVersionEnum = "2015-02-02"
)

type PostDeleteCacheSecurityGroupQueryParams struct {
	Action  PostDeleteCacheSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteCacheSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteCacheSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteCacheSecurityGroupRequest struct {
	QueryParams PostDeleteCacheSecurityGroupQueryParams
	Headers     PostDeleteCacheSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteCacheSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
