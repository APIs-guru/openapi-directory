package operations

type GetDeleteGlobalReplicationGroupActionEnum string

const (
	GetDeleteGlobalReplicationGroupActionEnumDeleteGlobalReplicationGroup GetDeleteGlobalReplicationGroupActionEnum = "DeleteGlobalReplicationGroup"
)

type GetDeleteGlobalReplicationGroupVersionEnum string

const (
	GetDeleteGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetDeleteGlobalReplicationGroupQueryParams struct {
	Action                        GetDeleteGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalReplicationGroupID      string                                     `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	RetainPrimaryReplicationGroup bool                                       `queryParam:"style=form,explode=true,name=RetainPrimaryReplicationGroup"`
	Version                       GetDeleteGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteGlobalReplicationGroupRequest struct {
	QueryParams GetDeleteGlobalReplicationGroupQueryParams
	Headers     GetDeleteGlobalReplicationGroupHeaders
}

type GetDeleteGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
