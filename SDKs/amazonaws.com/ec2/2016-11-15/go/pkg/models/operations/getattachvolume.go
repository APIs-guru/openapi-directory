package operations

type GetAttachVolumeActionEnum string

const (
	GetAttachVolumeActionEnumAttachVolume GetAttachVolumeActionEnum = "AttachVolume"
)

type GetAttachVolumeVersionEnum string

const (
	GetAttachVolumeVersionEnumTwoThousandAndSixteen1115 GetAttachVolumeVersionEnum = "2016-11-15"
)

type GetAttachVolumeQueryParams struct {
	Action     GetAttachVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Device     string                     `queryParam:"style=form,explode=true,name=Device"`
	DryRun     *bool                      `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                     `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetAttachVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VolumeID   string                     `queryParam:"style=form,explode=true,name=VolumeId"`
}

type GetAttachVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAttachVolumeRequest struct {
	QueryParams GetAttachVolumeQueryParams
	Headers     GetAttachVolumeHeaders
}

type GetAttachVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
