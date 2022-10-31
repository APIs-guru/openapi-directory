package operations

type PostDeleteGlobalReplicationGroupActionEnum string

const (
	PostDeleteGlobalReplicationGroupActionEnumDeleteGlobalReplicationGroup PostDeleteGlobalReplicationGroupActionEnum = "DeleteGlobalReplicationGroup"
)

type PostDeleteGlobalReplicationGroupVersionEnum string

const (
	PostDeleteGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostDeleteGlobalReplicationGroupQueryParams struct {
	Action  PostDeleteGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteGlobalReplicationGroupRequest struct {
	QueryParams PostDeleteGlobalReplicationGroupQueryParams
	Headers     PostDeleteGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
