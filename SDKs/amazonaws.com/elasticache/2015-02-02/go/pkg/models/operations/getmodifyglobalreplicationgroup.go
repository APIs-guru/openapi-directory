package operations

type GetModifyGlobalReplicationGroupActionEnum string

const (
	GetModifyGlobalReplicationGroupActionEnumModifyGlobalReplicationGroup GetModifyGlobalReplicationGroupActionEnum = "ModifyGlobalReplicationGroup"
)

type GetModifyGlobalReplicationGroupVersionEnum string

const (
	GetModifyGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetModifyGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetModifyGlobalReplicationGroupQueryParams struct {
	Action                            GetModifyGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately                  bool                                       `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	AutomaticFailoverEnabled          *bool                                      `queryParam:"style=form,explode=true,name=AutomaticFailoverEnabled"`
	CacheNodeType                     *string                                    `queryParam:"style=form,explode=true,name=CacheNodeType"`
	CacheParameterGroupName           *string                                    `queryParam:"style=form,explode=true,name=CacheParameterGroupName"`
	EngineVersion                     *string                                    `queryParam:"style=form,explode=true,name=EngineVersion"`
	GlobalReplicationGroupDescription *string                                    `queryParam:"style=form,explode=true,name=GlobalReplicationGroupDescription"`
	GlobalReplicationGroupID          string                                     `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	Version                           GetModifyGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyGlobalReplicationGroupRequest struct {
	QueryParams GetModifyGlobalReplicationGroupQueryParams
	Headers     GetModifyGlobalReplicationGroupHeaders
}

type GetModifyGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
