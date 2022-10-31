package operations

type PostGetSerialConsoleAccessStatusActionEnum string

const (
	PostGetSerialConsoleAccessStatusActionEnumGetSerialConsoleAccessStatus PostGetSerialConsoleAccessStatusActionEnum = "GetSerialConsoleAccessStatus"
)

type PostGetSerialConsoleAccessStatusVersionEnum string

const (
	PostGetSerialConsoleAccessStatusVersionEnumTwoThousandAndSixteen1115 PostGetSerialConsoleAccessStatusVersionEnum = "2016-11-15"
)

type PostGetSerialConsoleAccessStatusQueryParams struct {
	Action  PostGetSerialConsoleAccessStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetSerialConsoleAccessStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetSerialConsoleAccessStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetSerialConsoleAccessStatusRequest struct {
	QueryParams PostGetSerialConsoleAccessStatusQueryParams
	Headers     PostGetSerialConsoleAccessStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetSerialConsoleAccessStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
