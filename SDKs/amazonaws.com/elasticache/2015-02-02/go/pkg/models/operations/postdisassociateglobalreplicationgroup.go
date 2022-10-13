package operations

type PostDisassociateGlobalReplicationGroupActionEnum string

const (
	PostDisassociateGlobalReplicationGroupActionEnumDisassociateGlobalReplicationGroup PostDisassociateGlobalReplicationGroupActionEnum = "DisassociateGlobalReplicationGroup"
)

type PostDisassociateGlobalReplicationGroupVersionEnum string

const (
	PostDisassociateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostDisassociateGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostDisassociateGlobalReplicationGroupQueryParams struct {
	Action  PostDisassociateGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateGlobalReplicationGroupRequest struct {
	QueryParams PostDisassociateGlobalReplicationGroupQueryParams
	Headers     PostDisassociateGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
