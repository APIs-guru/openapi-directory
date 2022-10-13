package operations

type PostDeleteReplicationGroupActionEnum string

const (
	PostDeleteReplicationGroupActionEnumDeleteReplicationGroup PostDeleteReplicationGroupActionEnum = "DeleteReplicationGroup"
)

type PostDeleteReplicationGroupVersionEnum string

const (
	PostDeleteReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteReplicationGroupVersionEnum = "2015-02-02"
)

type PostDeleteReplicationGroupQueryParams struct {
	Action  PostDeleteReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteReplicationGroupRequest struct {
	QueryParams PostDeleteReplicationGroupQueryParams
	Headers     PostDeleteReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
