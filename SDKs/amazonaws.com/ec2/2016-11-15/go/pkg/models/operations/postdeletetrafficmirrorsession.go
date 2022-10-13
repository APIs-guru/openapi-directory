package operations

type PostDeleteTrafficMirrorSessionActionEnum string

const (
	PostDeleteTrafficMirrorSessionActionEnumDeleteTrafficMirrorSession PostDeleteTrafficMirrorSessionActionEnum = "DeleteTrafficMirrorSession"
)

type PostDeleteTrafficMirrorSessionVersionEnum string

const (
	PostDeleteTrafficMirrorSessionVersionEnumTwoThousandAndSixteen1115 PostDeleteTrafficMirrorSessionVersionEnum = "2016-11-15"
)

type PostDeleteTrafficMirrorSessionQueryParams struct {
	Action  PostDeleteTrafficMirrorSessionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTrafficMirrorSessionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTrafficMirrorSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteTrafficMirrorSessionRequest struct {
	QueryParams PostDeleteTrafficMirrorSessionQueryParams
	Headers     PostDeleteTrafficMirrorSessionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTrafficMirrorSessionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
