package operations

type PostCreateCacheSecurityGroupActionEnum string

const (
	PostCreateCacheSecurityGroupActionEnumCreateCacheSecurityGroup PostCreateCacheSecurityGroupActionEnum = "CreateCacheSecurityGroup"
)

type PostCreateCacheSecurityGroupVersionEnum string

const (
	PostCreateCacheSecurityGroupVersionEnumTwoThousandAndFifteen0202 PostCreateCacheSecurityGroupVersionEnum = "2015-02-02"
)

type PostCreateCacheSecurityGroupQueryParams struct {
	Action  PostCreateCacheSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCacheSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCacheSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCacheSecurityGroupRequest struct {
	QueryParams PostCreateCacheSecurityGroupQueryParams
	Headers     PostCreateCacheSecurityGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCacheSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
