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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
