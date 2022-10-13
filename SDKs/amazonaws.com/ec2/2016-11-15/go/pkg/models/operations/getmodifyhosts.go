package operations

type GetModifyHostsActionEnum string

const (
	GetModifyHostsActionEnumModifyHosts GetModifyHostsActionEnum = "ModifyHosts"
)

type GetModifyHostsAutoPlacementEnum string

const (
	GetModifyHostsAutoPlacementEnumOn  GetModifyHostsAutoPlacementEnum = "on"
	GetModifyHostsAutoPlacementEnumOff GetModifyHostsAutoPlacementEnum = "off"
)

type GetModifyHostsHostRecoveryEnum string

const (
	GetModifyHostsHostRecoveryEnumOn  GetModifyHostsHostRecoveryEnum = "on"
	GetModifyHostsHostRecoveryEnumOff GetModifyHostsHostRecoveryEnum = "off"
)

type GetModifyHostsVersionEnum string

const (
	GetModifyHostsVersionEnumTwoThousandAndSixteen1115 GetModifyHostsVersionEnum = "2016-11-15"
)

type GetModifyHostsQueryParams struct {
	Action         GetModifyHostsActionEnum         `queryParam:"style=form,explode=true,name=Action"`
	AutoPlacement  *GetModifyHostsAutoPlacementEnum `queryParam:"style=form,explode=true,name=AutoPlacement"`
	HostID         []string                         `queryParam:"style=form,explode=true,name=HostId"`
	HostRecovery   *GetModifyHostsHostRecoveryEnum  `queryParam:"style=form,explode=true,name=HostRecovery"`
	InstanceFamily *string                          `queryParam:"style=form,explode=true,name=InstanceFamily"`
	InstanceType   *string                          `queryParam:"style=form,explode=true,name=InstanceType"`
	Version        GetModifyHostsVersionEnum        `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyHostsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyHostsRequest struct {
	QueryParams GetModifyHostsQueryParams
	Headers     GetModifyHostsHeaders
}

type GetModifyHostsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
