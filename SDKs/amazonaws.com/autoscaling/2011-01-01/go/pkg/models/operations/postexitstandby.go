package operations

type PostExitStandbyActionEnum string

const (
	PostExitStandbyActionEnumExitStandby PostExitStandbyActionEnum = "ExitStandby"
)

type PostExitStandbyVersionEnum string

const (
	PostExitStandbyVersionEnumTwoThousandAndEleven0101 PostExitStandbyVersionEnum = "2011-01-01"
)

type PostExitStandbyQueryParams struct {
	Action  PostExitStandbyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostExitStandbyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostExitStandbyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostExitStandbyRequest struct {
	QueryParams PostExitStandbyQueryParams
	Headers     PostExitStandbyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostExitStandbyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
