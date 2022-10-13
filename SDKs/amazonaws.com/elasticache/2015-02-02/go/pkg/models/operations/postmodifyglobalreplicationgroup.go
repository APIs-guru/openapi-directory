package operations

type PostModifyGlobalReplicationGroupActionEnum string

const (
	PostModifyGlobalReplicationGroupActionEnumModifyGlobalReplicationGroup PostModifyGlobalReplicationGroupActionEnum = "ModifyGlobalReplicationGroup"
)

type PostModifyGlobalReplicationGroupVersionEnum string

const (
	PostModifyGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostModifyGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostModifyGlobalReplicationGroupQueryParams struct {
	Action  PostModifyGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyGlobalReplicationGroupRequest struct {
	QueryParams PostModifyGlobalReplicationGroupQueryParams
	Headers     PostModifyGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
