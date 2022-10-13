package operations

type GetUpdateGroupActionEnum string

const (
	GetUpdateGroupActionEnumUpdateGroup GetUpdateGroupActionEnum = "UpdateGroup"
)

type GetUpdateGroupVersionEnum string

const (
	GetUpdateGroupVersionEnumTwoThousandAndTen0508 GetUpdateGroupVersionEnum = "2010-05-08"
)

type GetUpdateGroupQueryParams struct {
	Action       GetUpdateGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName    string                    `queryParam:"style=form,explode=true,name=GroupName"`
	NewGroupName *string                   `queryParam:"style=form,explode=true,name=NewGroupName"`
	NewPath      *string                   `queryParam:"style=form,explode=true,name=NewPath"`
	Version      GetUpdateGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateGroupRequest struct {
	QueryParams GetUpdateGroupQueryParams
	Headers     GetUpdateGroupHeaders
}

type GetUpdateGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
