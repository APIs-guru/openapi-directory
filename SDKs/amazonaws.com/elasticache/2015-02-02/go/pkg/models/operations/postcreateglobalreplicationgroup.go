package operations

type PostCreateGlobalReplicationGroupActionEnum string

const (
	PostCreateGlobalReplicationGroupActionEnumCreateGlobalReplicationGroup PostCreateGlobalReplicationGroupActionEnum = "CreateGlobalReplicationGroup"
)

type PostCreateGlobalReplicationGroupVersionEnum string

const (
	PostCreateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostCreateGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostCreateGlobalReplicationGroupQueryParams struct {
	Action  PostCreateGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateGlobalReplicationGroupRequest struct {
	QueryParams PostCreateGlobalReplicationGroupQueryParams
	Headers     PostCreateGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
