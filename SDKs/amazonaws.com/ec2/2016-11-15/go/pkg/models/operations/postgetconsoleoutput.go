package operations

type PostGetConsoleOutputActionEnum string

const (
	PostGetConsoleOutputActionEnumGetConsoleOutput PostGetConsoleOutputActionEnum = "GetConsoleOutput"
)

type PostGetConsoleOutputVersionEnum string

const (
	PostGetConsoleOutputVersionEnumTwoThousandAndSixteen1115 PostGetConsoleOutputVersionEnum = "2016-11-15"
)

type PostGetConsoleOutputQueryParams struct {
	Action  PostGetConsoleOutputActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetConsoleOutputVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetConsoleOutputHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetConsoleOutputRequest struct {
	QueryParams PostGetConsoleOutputQueryParams
	Headers     PostGetConsoleOutputHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetConsoleOutputResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
