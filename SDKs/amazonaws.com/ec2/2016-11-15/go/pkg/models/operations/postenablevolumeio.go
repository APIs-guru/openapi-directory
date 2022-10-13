package operations

type PostEnableVolumeIoActionEnum string

const (
	PostEnableVolumeIoActionEnumEnableVolumeIo PostEnableVolumeIoActionEnum = "EnableVolumeIO"
)

type PostEnableVolumeIoVersionEnum string

const (
	PostEnableVolumeIoVersionEnumTwoThousandAndSixteen1115 PostEnableVolumeIoVersionEnum = "2016-11-15"
)

type PostEnableVolumeIoQueryParams struct {
	Action  PostEnableVolumeIoActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableVolumeIoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableVolumeIoHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostEnableVolumeIoRequest struct {
	QueryParams PostEnableVolumeIoQueryParams
	Headers     PostEnableVolumeIoHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableVolumeIoResponse struct {
	ContentType string
	StatusCode  int64
}
