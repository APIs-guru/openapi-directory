package operations

type PostUpdateLoginProfileActionEnum string

const (
	PostUpdateLoginProfileActionEnumUpdateLoginProfile PostUpdateLoginProfileActionEnum = "UpdateLoginProfile"
)

type PostUpdateLoginProfileVersionEnum string

const (
	PostUpdateLoginProfileVersionEnumTwoThousandAndTen0508 PostUpdateLoginProfileVersionEnum = "2010-05-08"
)

type PostUpdateLoginProfileQueryParams struct {
	Action  PostUpdateLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateLoginProfileRequest struct {
	QueryParams PostUpdateLoginProfileQueryParams
	Headers     PostUpdateLoginProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
