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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
