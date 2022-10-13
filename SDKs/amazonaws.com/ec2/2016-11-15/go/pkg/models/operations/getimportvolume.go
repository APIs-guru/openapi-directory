package operations

import (
	"openapi/pkg/models/shared"
)

type GetImportVolumeActionEnum string

const (
	GetImportVolumeActionEnumImportVolume GetImportVolumeActionEnum = "ImportVolume"
)

type GetImportVolumeImage struct {
	Bytes             int64                      `queryParam:"name=Bytes"`
	Format            shared.DiskImageFormatEnum `queryParam:"name=Format"`
	ImportManifestURL string                     `queryParam:"name=ImportManifestUrl"`
}

type GetImportVolumeVersionEnum string

const (
	GetImportVolumeVersionEnumTwoThousandAndSixteen1115 GetImportVolumeVersionEnum = "2016-11-15"
)

type GetImportVolumeVolume struct {
	Size int64 `queryParam:"name=Size"`
}

type GetImportVolumeQueryParams struct {
	Action           GetImportVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AvailabilityZone string                     `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	Description      *string                    `queryParam:"style=form,explode=true,name=Description"`
	DryRun           *bool                      `queryParam:"style=form,explode=true,name=DryRun"`
	Image            GetImportVolumeImage       `queryParam:"style=form,explode=true,name=Image"`
	Version          GetImportVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	Volume           GetImportVolumeVolume      `queryParam:"style=form,explode=true,name=Volume"`
}

type GetImportVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImportVolumeRequest struct {
	QueryParams GetImportVolumeQueryParams
	Headers     GetImportVolumeHeaders
}

type GetImportVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
