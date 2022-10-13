package operations

type PostUpdateRoleDescriptionActionEnum string

const (
	PostUpdateRoleDescriptionActionEnumUpdateRoleDescription PostUpdateRoleDescriptionActionEnum = "UpdateRoleDescription"
)

type PostUpdateRoleDescriptionVersionEnum string

const (
	PostUpdateRoleDescriptionVersionEnumTwoThousandAndTen0508 PostUpdateRoleDescriptionVersionEnum = "2010-05-08"
)

type PostUpdateRoleDescriptionQueryParams struct {
	Action  PostUpdateRoleDescriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateRoleDescriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateRoleDescriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateRoleDescriptionRequest struct {
	QueryParams PostUpdateRoleDescriptionQueryParams
	Headers     PostUpdateRoleDescriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateRoleDescriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
