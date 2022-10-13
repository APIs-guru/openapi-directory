package operations

type PostModifySpotFleetRequestActionEnum string

const (
	PostModifySpotFleetRequestActionEnumModifySpotFleetRequest PostModifySpotFleetRequestActionEnum = "ModifySpotFleetRequest"
)

type PostModifySpotFleetRequestVersionEnum string

const (
	PostModifySpotFleetRequestVersionEnumTwoThousandAndSixteen1115 PostModifySpotFleetRequestVersionEnum = "2016-11-15"
)

type PostModifySpotFleetRequestQueryParams struct {
	Action  PostModifySpotFleetRequestActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySpotFleetRequestVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySpotFleetRequestHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifySpotFleetRequestRequest struct {
	QueryParams PostModifySpotFleetRequestQueryParams
	Headers     PostModifySpotFleetRequestHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySpotFleetRequestResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
