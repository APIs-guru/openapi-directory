package operations

type PostModifyFleetActionEnum string

const (
	PostModifyFleetActionEnumModifyFleet PostModifyFleetActionEnum = "ModifyFleet"
)

type PostModifyFleetVersionEnum string

const (
	PostModifyFleetVersionEnumTwoThousandAndSixteen1115 PostModifyFleetVersionEnum = "2016-11-15"
)

type PostModifyFleetQueryParams struct {
	Action  PostModifyFleetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyFleetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyFleetRequest struct {
	QueryParams PostModifyFleetQueryParams
	Headers     PostModifyFleetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyFleetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
