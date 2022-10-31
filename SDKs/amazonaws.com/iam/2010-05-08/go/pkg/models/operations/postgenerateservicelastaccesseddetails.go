package operations

type PostGenerateServiceLastAccessedDetailsActionEnum string

const (
	PostGenerateServiceLastAccessedDetailsActionEnumGenerateServiceLastAccessedDetails PostGenerateServiceLastAccessedDetailsActionEnum = "GenerateServiceLastAccessedDetails"
)

type PostGenerateServiceLastAccessedDetailsVersionEnum string

const (
	PostGenerateServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508 PostGenerateServiceLastAccessedDetailsVersionEnum = "2010-05-08"
)

type PostGenerateServiceLastAccessedDetailsQueryParams struct {
	Action  PostGenerateServiceLastAccessedDetailsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGenerateServiceLastAccessedDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGenerateServiceLastAccessedDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGenerateServiceLastAccessedDetailsRequest struct {
	QueryParams PostGenerateServiceLastAccessedDetailsQueryParams
	Headers     PostGenerateServiceLastAccessedDetailsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGenerateServiceLastAccessedDetailsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
