package operations

type PostModifyVolumeAttributeActionEnum string

const (
	PostModifyVolumeAttributeActionEnumModifyVolumeAttribute PostModifyVolumeAttributeActionEnum = "ModifyVolumeAttribute"
)

type PostModifyVolumeAttributeVersionEnum string

const (
	PostModifyVolumeAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyVolumeAttributeVersionEnum = "2016-11-15"
)

type PostModifyVolumeAttributeQueryParams struct {
	Action  PostModifyVolumeAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyVolumeAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyVolumeAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyVolumeAttributeRequest struct {
	QueryParams PostModifyVolumeAttributeQueryParams
	Headers     PostModifyVolumeAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyVolumeAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
