package operations

type PostModifyTrafficMirrorSessionActionEnum string

const (
	PostModifyTrafficMirrorSessionActionEnumModifyTrafficMirrorSession PostModifyTrafficMirrorSessionActionEnum = "ModifyTrafficMirrorSession"
)

type PostModifyTrafficMirrorSessionVersionEnum string

const (
	PostModifyTrafficMirrorSessionVersionEnumTwoThousandAndSixteen1115 PostModifyTrafficMirrorSessionVersionEnum = "2016-11-15"
)

type PostModifyTrafficMirrorSessionQueryParams struct {
	Action  PostModifyTrafficMirrorSessionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyTrafficMirrorSessionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyTrafficMirrorSessionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyTrafficMirrorSessionRequest struct {
	QueryParams PostModifyTrafficMirrorSessionQueryParams
	Headers     PostModifyTrafficMirrorSessionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyTrafficMirrorSessionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
