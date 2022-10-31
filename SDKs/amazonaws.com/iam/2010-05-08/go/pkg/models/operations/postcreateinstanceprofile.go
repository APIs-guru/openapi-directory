package operations

type PostCreateInstanceProfileActionEnum string

const (
	PostCreateInstanceProfileActionEnumCreateInstanceProfile PostCreateInstanceProfileActionEnum = "CreateInstanceProfile"
)

type PostCreateInstanceProfileVersionEnum string

const (
	PostCreateInstanceProfileVersionEnumTwoThousandAndTen0508 PostCreateInstanceProfileVersionEnum = "2010-05-08"
)

type PostCreateInstanceProfileQueryParams struct {
	Action  PostCreateInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateInstanceProfileRequest struct {
	QueryParams PostCreateInstanceProfileQueryParams
	Headers     PostCreateInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
