package operations

type GetDetachVolumeActionEnum string

const (
	GetDetachVolumeActionEnumDetachVolume GetDetachVolumeActionEnum = "DetachVolume"
)

type GetDetachVolumeVersionEnum string

const (
	GetDetachVolumeVersionEnumTwoThousandAndSixteen1115 GetDetachVolumeVersionEnum = "2016-11-15"
)

type GetDetachVolumeQueryParams struct {
	Action     GetDetachVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Device     *string                    `queryParam:"style=form,explode=true,name=Device"`
	DryRun     *bool                      `queryParam:"style=form,explode=true,name=DryRun"`
	Force      *bool                      `queryParam:"style=form,explode=true,name=Force"`
	InstanceID *string                    `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetDetachVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VolumeID   string                     `queryParam:"style=form,explode=true,name=VolumeId"`
}

type GetDetachVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachVolumeRequest struct {
	QueryParams GetDetachVolumeQueryParams
	Headers     GetDetachVolumeHeaders
}

type GetDetachVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
