package operations

type PostDetachVolumeActionEnum string

const (
	PostDetachVolumeActionEnumDetachVolume PostDetachVolumeActionEnum = "DetachVolume"
)

type PostDetachVolumeVersionEnum string

const (
	PostDetachVolumeVersionEnumTwoThousandAndSixteen1115 PostDetachVolumeVersionEnum = "2016-11-15"
)

type PostDetachVolumeQueryParams struct {
	Action  PostDetachVolumeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachVolumeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachVolumeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachVolumeRequest struct {
	QueryParams PostDetachVolumeQueryParams
	Headers     PostDetachVolumeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachVolumeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
