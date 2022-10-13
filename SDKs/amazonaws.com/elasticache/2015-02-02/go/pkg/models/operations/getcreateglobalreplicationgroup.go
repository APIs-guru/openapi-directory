package operations

type GetCreateGlobalReplicationGroupActionEnum string

const (
	GetCreateGlobalReplicationGroupActionEnumCreateGlobalReplicationGroup GetCreateGlobalReplicationGroupActionEnum = "CreateGlobalReplicationGroup"
)

type GetCreateGlobalReplicationGroupVersionEnum string

const (
	GetCreateGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetCreateGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetCreateGlobalReplicationGroupQueryParams struct {
	Action                            GetCreateGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalReplicationGroupDescription *string                                    `queryParam:"style=form,explode=true,name=GlobalReplicationGroupDescription"`
	GlobalReplicationGroupIDSuffix    string                                     `queryParam:"style=form,explode=true,name=GlobalReplicationGroupIdSuffix"`
	PrimaryReplicationGroupID         string                                     `queryParam:"style=form,explode=true,name=PrimaryReplicationGroupId"`
	Version                           GetCreateGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateGlobalReplicationGroupRequest struct {
	QueryParams GetCreateGlobalReplicationGroupQueryParams
	Headers     GetCreateGlobalReplicationGroupHeaders
}

type GetCreateGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
