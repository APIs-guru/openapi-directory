package operations

type PostAddRoleToInstanceProfileActionEnum string

const (
	PostAddRoleToInstanceProfileActionEnumAddRoleToInstanceProfile PostAddRoleToInstanceProfileActionEnum = "AddRoleToInstanceProfile"
)

type PostAddRoleToInstanceProfileVersionEnum string

const (
	PostAddRoleToInstanceProfileVersionEnumTwoThousandAndTen0508 PostAddRoleToInstanceProfileVersionEnum = "2010-05-08"
)

type PostAddRoleToInstanceProfileQueryParams struct {
	Action  PostAddRoleToInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddRoleToInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddRoleToInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddRoleToInstanceProfileRequest struct {
	QueryParams PostAddRoleToInstanceProfileQueryParams
	Headers     PostAddRoleToInstanceProfileHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddRoleToInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
