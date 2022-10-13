package operations

type PostConfirmProductInstanceActionEnum string

const (
	PostConfirmProductInstanceActionEnumConfirmProductInstance PostConfirmProductInstanceActionEnum = "ConfirmProductInstance"
)

type PostConfirmProductInstanceVersionEnum string

const (
	PostConfirmProductInstanceVersionEnumTwoThousandAndSixteen1115 PostConfirmProductInstanceVersionEnum = "2016-11-15"
)

type PostConfirmProductInstanceQueryParams struct {
	Action  PostConfirmProductInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostConfirmProductInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostConfirmProductInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostConfirmProductInstanceRequest struct {
	QueryParams PostConfirmProductInstanceQueryParams
	Headers     PostConfirmProductInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostConfirmProductInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
