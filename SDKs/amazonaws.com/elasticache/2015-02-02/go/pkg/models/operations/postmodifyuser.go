package operations

type PostModifyUserActionEnum string

const (
	PostModifyUserActionEnumModifyUser PostModifyUserActionEnum = "ModifyUser"
)

type PostModifyUserVersionEnum string

const (
	PostModifyUserVersionEnumTwoThousandAndFifteen0202 PostModifyUserVersionEnum = "2015-02-02"
)

type PostModifyUserQueryParams struct {
	Action  PostModifyUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyUserHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyUserRequest struct {
	QueryParams PostModifyUserQueryParams
	Headers     PostModifyUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
