package operations

type GetModifyAvailabilityZoneGroupActionEnum string

const (
	GetModifyAvailabilityZoneGroupActionEnumModifyAvailabilityZoneGroup GetModifyAvailabilityZoneGroupActionEnum = "ModifyAvailabilityZoneGroup"
)

type GetModifyAvailabilityZoneGroupOptInStatusEnum string

const (
	GetModifyAvailabilityZoneGroupOptInStatusEnumOptedIn    GetModifyAvailabilityZoneGroupOptInStatusEnum = "opted-in"
	GetModifyAvailabilityZoneGroupOptInStatusEnumNotOptedIn GetModifyAvailabilityZoneGroupOptInStatusEnum = "not-opted-in"
)

type GetModifyAvailabilityZoneGroupVersionEnum string

const (
	GetModifyAvailabilityZoneGroupVersionEnumTwoThousandAndSixteen1115 GetModifyAvailabilityZoneGroupVersionEnum = "2016-11-15"
)

type GetModifyAvailabilityZoneGroupQueryParams struct {
	Action      GetModifyAvailabilityZoneGroupActionEnum      `queryParam:"style=form,explode=true,name=Action"`
	DryRun      *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	GroupName   string                                        `queryParam:"style=form,explode=true,name=GroupName"`
	OptInStatus GetModifyAvailabilityZoneGroupOptInStatusEnum `queryParam:"style=form,explode=true,name=OptInStatus"`
	Version     GetModifyAvailabilityZoneGroupVersionEnum     `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyAvailabilityZoneGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyAvailabilityZoneGroupRequest struct {
	QueryParams GetModifyAvailabilityZoneGroupQueryParams
	Headers     GetModifyAvailabilityZoneGroupHeaders
}

type GetModifyAvailabilityZoneGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
