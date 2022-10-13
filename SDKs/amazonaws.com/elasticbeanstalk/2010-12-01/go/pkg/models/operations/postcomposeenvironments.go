package operations

type PostComposeEnvironmentsActionEnum string

const (
	PostComposeEnvironmentsActionEnumComposeEnvironments PostComposeEnvironmentsActionEnum = "ComposeEnvironments"
)

type PostComposeEnvironmentsVersionEnum string

const (
	PostComposeEnvironmentsVersionEnumTwoThousandAndTen1201 PostComposeEnvironmentsVersionEnum = "2010-12-01"
)

type PostComposeEnvironmentsQueryParams struct {
	Action  PostComposeEnvironmentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostComposeEnvironmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostComposeEnvironmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostComposeEnvironmentsRequest struct {
	QueryParams PostComposeEnvironmentsQueryParams
	Headers     PostComposeEnvironmentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostComposeEnvironmentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
