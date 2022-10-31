package operations

type PostListGroupsForUserActionEnum string

const (
	PostListGroupsForUserActionEnumListGroupsForUser PostListGroupsForUserActionEnum = "ListGroupsForUser"
)

type PostListGroupsForUserVersionEnum string

const (
	PostListGroupsForUserVersionEnumTwoThousandAndTen0508 PostListGroupsForUserVersionEnum = "2010-05-08"
)

type PostListGroupsForUserQueryParams struct {
	Action   PostListGroupsForUserActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string                          `queryParam:"style=form,explode=true,name=MaxItems"`
	Version  PostListGroupsForUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListGroupsForUserHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostListGroupsForUserRequest struct {
	QueryParams PostListGroupsForUserQueryParams
	Headers     PostListGroupsForUserHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListGroupsForUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
