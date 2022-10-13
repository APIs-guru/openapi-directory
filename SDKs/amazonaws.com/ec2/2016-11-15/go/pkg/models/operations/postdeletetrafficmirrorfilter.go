package operations

type PostDeleteTrafficMirrorFilterActionEnum string

const (
	PostDeleteTrafficMirrorFilterActionEnumDeleteTrafficMirrorFilter PostDeleteTrafficMirrorFilterActionEnum = "DeleteTrafficMirrorFilter"
)

type PostDeleteTrafficMirrorFilterVersionEnum string

const (
	PostDeleteTrafficMirrorFilterVersionEnumTwoThousandAndSixteen1115 PostDeleteTrafficMirrorFilterVersionEnum = "2016-11-15"
)

type PostDeleteTrafficMirrorFilterQueryParams struct {
	Action  PostDeleteTrafficMirrorFilterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTrafficMirrorFilterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTrafficMirrorFilterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteTrafficMirrorFilterRequest struct {
	QueryParams PostDeleteTrafficMirrorFilterQueryParams
	Headers     PostDeleteTrafficMirrorFilterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTrafficMirrorFilterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
