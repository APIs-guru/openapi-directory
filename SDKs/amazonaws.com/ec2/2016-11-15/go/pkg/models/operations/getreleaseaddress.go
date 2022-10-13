package operations

type GetReleaseAddressActionEnum string

const (
	GetReleaseAddressActionEnumReleaseAddress GetReleaseAddressActionEnum = "ReleaseAddress"
)

type GetReleaseAddressVersionEnum string

const (
	GetReleaseAddressVersionEnumTwoThousandAndSixteen1115 GetReleaseAddressVersionEnum = "2016-11-15"
)

type GetReleaseAddressQueryParams struct {
	Action             GetReleaseAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllocationID       *string                      `queryParam:"style=form,explode=true,name=AllocationId"`
	DryRun             *bool                        `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkBorderGroup *string                      `queryParam:"style=form,explode=true,name=NetworkBorderGroup"`
	PublicIP           *string                      `queryParam:"style=form,explode=true,name=PublicIp"`
	Version            GetReleaseAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetReleaseAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReleaseAddressRequest struct {
	QueryParams GetReleaseAddressQueryParams
	Headers     GetReleaseAddressHeaders
}

type GetReleaseAddressResponse struct {
	ContentType string
	StatusCode  int64
}
