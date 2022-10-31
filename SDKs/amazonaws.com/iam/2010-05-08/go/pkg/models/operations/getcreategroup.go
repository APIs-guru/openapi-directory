package operations

type GetCreateGroupActionEnum string

const (
	GetCreateGroupActionEnumCreateGroup GetCreateGroupActionEnum = "CreateGroup"
)

type GetCreateGroupVersionEnum string

const (
	GetCreateGroupVersionEnumTwoThousandAndTen0508 GetCreateGroupVersionEnum = "2010-05-08"
)

type GetCreateGroupQueryParams struct {
	Action    GetCreateGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                    `queryParam:"style=form,explode=true,name=GroupName"`
	Path      *string                   `queryParam:"style=form,explode=true,name=Path"`
	Version   GetCreateGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateGroupRequest struct {
	QueryParams GetCreateGroupQueryParams
	Headers     GetCreateGroupHeaders
}

type GetCreateGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
