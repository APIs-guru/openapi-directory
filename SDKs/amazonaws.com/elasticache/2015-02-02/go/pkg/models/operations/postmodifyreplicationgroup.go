package operations

type PostModifyReplicationGroupActionEnum string

const (
	PostModifyReplicationGroupActionEnumModifyReplicationGroup PostModifyReplicationGroupActionEnum = "ModifyReplicationGroup"
)

type PostModifyReplicationGroupVersionEnum string

const (
	PostModifyReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostModifyReplicationGroupVersionEnum = "2015-02-02"
)

type PostModifyReplicationGroupQueryParams struct {
	Action  PostModifyReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyReplicationGroupRequest struct {
	QueryParams PostModifyReplicationGroupQueryParams
	Headers     PostModifyReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
