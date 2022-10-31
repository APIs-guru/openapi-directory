package operations

type PostModifyInstanceMetadataOptionsActionEnum string

const (
	PostModifyInstanceMetadataOptionsActionEnumModifyInstanceMetadataOptions PostModifyInstanceMetadataOptionsActionEnum = "ModifyInstanceMetadataOptions"
)

type PostModifyInstanceMetadataOptionsVersionEnum string

const (
	PostModifyInstanceMetadataOptionsVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceMetadataOptionsVersionEnum = "2016-11-15"
)

type PostModifyInstanceMetadataOptionsQueryParams struct {
	Action  PostModifyInstanceMetadataOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyInstanceMetadataOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyInstanceMetadataOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyInstanceMetadataOptionsRequest struct {
	QueryParams PostModifyInstanceMetadataOptionsQueryParams
	Headers     PostModifyInstanceMetadataOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyInstanceMetadataOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
