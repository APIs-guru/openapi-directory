package operations

type PostCreateUserGroupActionEnum string

const (
	PostCreateUserGroupActionEnumCreateUserGroup PostCreateUserGroupActionEnum = "CreateUserGroup"
)

type PostCreateUserGroupVersionEnum string

const (
	PostCreateUserGroupVersionEnumTwoThousandAndFifteen0202 PostCreateUserGroupVersionEnum = "2015-02-02"
)

type PostCreateUserGroupQueryParams struct {
	Action  PostCreateUserGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateUserGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateUserGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateUserGroupRequest struct {
	QueryParams PostCreateUserGroupQueryParams
	Headers     PostCreateUserGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateUserGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
