package operations

type PostModifyInstancePlacementActionEnum string

const (
	PostModifyInstancePlacementActionEnumModifyInstancePlacement PostModifyInstancePlacementActionEnum = "ModifyInstancePlacement"
)

type PostModifyInstancePlacementVersionEnum string

const (
	PostModifyInstancePlacementVersionEnumTwoThousandAndSixteen1115 PostModifyInstancePlacementVersionEnum = "2016-11-15"
)

type PostModifyInstancePlacementQueryParams struct {
	Action  PostModifyInstancePlacementActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyInstancePlacementVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyInstancePlacementHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyInstancePlacementRequest struct {
	QueryParams PostModifyInstancePlacementQueryParams
	Headers     PostModifyInstancePlacementHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyInstancePlacementResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
