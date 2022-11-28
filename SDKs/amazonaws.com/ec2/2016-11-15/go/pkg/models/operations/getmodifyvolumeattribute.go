package operations

type GetModifyVolumeAttributeActionEnum string

const (
	GetModifyVolumeAttributeActionEnumModifyVolumeAttribute GetModifyVolumeAttributeActionEnum = "ModifyVolumeAttribute"
)

// GetModifyVolumeAttributeAutoEnableIo
// Describes a value for a resource attribute that is a Boolean value.
type GetModifyVolumeAttributeAutoEnableIo struct {
	Value *bool `queryParam:"name=Value"`
}

type GetModifyVolumeAttributeVersionEnum string

const (
	GetModifyVolumeAttributeVersionEnumTwoThousandAndSixteen1115 GetModifyVolumeAttributeVersionEnum = "2016-11-15"
)

type GetModifyVolumeAttributeQueryParams struct {
	Action       GetModifyVolumeAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	AutoEnableIo *GetModifyVolumeAttributeAutoEnableIo `queryParam:"style=form,explode=true,name=AutoEnableIO"`
	DryRun       *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version      GetModifyVolumeAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
	VolumeID     string                                `queryParam:"style=form,explode=true,name=VolumeId"`
}

type GetModifyVolumeAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyVolumeAttributeRequest struct {
	QueryParams GetModifyVolumeAttributeQueryParams
	Headers     GetModifyVolumeAttributeHeaders
}

type GetModifyVolumeAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
