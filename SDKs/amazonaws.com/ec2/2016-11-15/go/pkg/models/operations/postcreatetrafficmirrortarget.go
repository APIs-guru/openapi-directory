package operations

type PostCreateTrafficMirrorTargetActionEnum string

const (
	PostCreateTrafficMirrorTargetActionEnumCreateTrafficMirrorTarget PostCreateTrafficMirrorTargetActionEnum = "CreateTrafficMirrorTarget"
)

type PostCreateTrafficMirrorTargetVersionEnum string

const (
	PostCreateTrafficMirrorTargetVersionEnumTwoThousandAndSixteen1115 PostCreateTrafficMirrorTargetVersionEnum = "2016-11-15"
)

type PostCreateTrafficMirrorTargetQueryParams struct {
	Action  PostCreateTrafficMirrorTargetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTrafficMirrorTargetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTrafficMirrorTargetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTrafficMirrorTargetRequest struct {
	QueryParams PostCreateTrafficMirrorTargetQueryParams
	Headers     PostCreateTrafficMirrorTargetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTrafficMirrorTargetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
