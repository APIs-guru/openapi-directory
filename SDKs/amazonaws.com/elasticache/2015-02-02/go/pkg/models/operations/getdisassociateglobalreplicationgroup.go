package operations

type GetDisassociateGlobalReplicationGroupActionEnum string

const (
	GetDisassociateGlobalReplicationGroupActionEnumDisassociateGlobalReplicationGroup GetDisassociateGlobalReplicationGroupActionEnum = "DisassociateGlobalReplicationGroup"
)

type GetDisassociateGlobalReplicationGroupVersionEnum string

const (
	GetDisassociateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetDisassociateGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetDisassociateGlobalReplicationGroupQueryParams struct {
	Action                   GetDisassociateGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalReplicationGroupID string                                           `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	ReplicationGroupID       string                                           `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	ReplicationGroupRegion   string                                           `queryParam:"style=form,explode=true,name=ReplicationGroupRegion"`
	Version                  GetDisassociateGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisassociateGlobalReplicationGroupRequest struct {
	QueryParams GetDisassociateGlobalReplicationGroupQueryParams
	Headers     GetDisassociateGlobalReplicationGroupHeaders
}

type GetDisassociateGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
