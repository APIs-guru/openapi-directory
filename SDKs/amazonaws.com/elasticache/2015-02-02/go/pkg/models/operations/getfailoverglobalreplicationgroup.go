package operations

type GetFailoverGlobalReplicationGroupActionEnum string

const (
	GetFailoverGlobalReplicationGroupActionEnumFailoverGlobalReplicationGroup GetFailoverGlobalReplicationGroupActionEnum = "FailoverGlobalReplicationGroup"
)

type GetFailoverGlobalReplicationGroupVersionEnum string

const (
	GetFailoverGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetFailoverGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetFailoverGlobalReplicationGroupQueryParams struct {
	Action                    GetFailoverGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalReplicationGroupID  string                                       `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	PrimaryRegion             string                                       `queryParam:"style=form,explode=true,name=PrimaryRegion"`
	PrimaryReplicationGroupID string                                       `queryParam:"style=form,explode=true,name=PrimaryReplicationGroupId"`
	Version                   GetFailoverGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetFailoverGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFailoverGlobalReplicationGroupRequest struct {
	QueryParams GetFailoverGlobalReplicationGroupQueryParams
	Headers     GetFailoverGlobalReplicationGroupHeaders
}

type GetFailoverGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
