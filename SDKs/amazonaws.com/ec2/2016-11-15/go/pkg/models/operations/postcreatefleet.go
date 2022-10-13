package operations

type PostCreateFleetActionEnum string

const (
	PostCreateFleetActionEnumCreateFleet PostCreateFleetActionEnum = "CreateFleet"
)

type PostCreateFleetVersionEnum string

const (
	PostCreateFleetVersionEnumTwoThousandAndSixteen1115 PostCreateFleetVersionEnum = "2016-11-15"
)

type PostCreateFleetQueryParams struct {
	Action  PostCreateFleetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateFleetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateFleetRequest struct {
	QueryParams PostCreateFleetQueryParams
	Headers     PostCreateFleetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateFleetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
