package operations

type PostGetLoginProfileActionEnum string

const (
	PostGetLoginProfileActionEnumGetLoginProfile PostGetLoginProfileActionEnum = "GetLoginProfile"
)

type PostGetLoginProfileVersionEnum string

const (
	PostGetLoginProfileVersionEnumTwoThousandAndTen0508 PostGetLoginProfileVersionEnum = "2010-05-08"
)

type PostGetLoginProfileQueryParams struct {
	Action  PostGetLoginProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetLoginProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetLoginProfileRequest struct {
	QueryParams PostGetLoginProfileQueryParams
	Headers     PostGetLoginProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetLoginProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
