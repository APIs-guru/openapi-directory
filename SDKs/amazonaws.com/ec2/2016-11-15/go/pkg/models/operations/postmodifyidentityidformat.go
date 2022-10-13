package operations

type PostModifyIdentityIDFormatActionEnum string

const (
	PostModifyIdentityIDFormatActionEnumModifyIdentityIDFormat PostModifyIdentityIDFormatActionEnum = "ModifyIdentityIdFormat"
)

type PostModifyIdentityIDFormatVersionEnum string

const (
	PostModifyIdentityIDFormatVersionEnumTwoThousandAndSixteen1115 PostModifyIdentityIDFormatVersionEnum = "2016-11-15"
)

type PostModifyIdentityIDFormatQueryParams struct {
	Action  PostModifyIdentityIDFormatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyIdentityIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyIdentityIDFormatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyIdentityIDFormatRequest struct {
	QueryParams PostModifyIdentityIDFormatQueryParams
	Headers     PostModifyIdentityIDFormatHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyIdentityIDFormatResponse struct {
	ContentType string
	StatusCode  int64
}
