package operations

type PostModifyInstanceEventWindowActionEnum string

const (
	PostModifyInstanceEventWindowActionEnumModifyInstanceEventWindow PostModifyInstanceEventWindowActionEnum = "ModifyInstanceEventWindow"
)

type PostModifyInstanceEventWindowVersionEnum string

const (
	PostModifyInstanceEventWindowVersionEnumTwoThousandAndSixteen1115 PostModifyInstanceEventWindowVersionEnum = "2016-11-15"
)

type PostModifyInstanceEventWindowQueryParams struct {
	Action  PostModifyInstanceEventWindowActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyInstanceEventWindowVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyInstanceEventWindowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyInstanceEventWindowRequest struct {
	QueryParams PostModifyInstanceEventWindowQueryParams
	Headers     PostModifyInstanceEventWindowHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyInstanceEventWindowResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
