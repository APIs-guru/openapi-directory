package operations

type GetDeleteGroupActionEnum string

const (
	GetDeleteGroupActionEnumDeleteGroup GetDeleteGroupActionEnum = "DeleteGroup"
)

type GetDeleteGroupVersionEnum string

const (
	GetDeleteGroupVersionEnumTwoThousandAndTen0508 GetDeleteGroupVersionEnum = "2010-05-08"
)

type GetDeleteGroupQueryParams struct {
	Action    GetDeleteGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GroupName string                    `queryParam:"style=form,explode=true,name=GroupName"`
	Version   GetDeleteGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteGroupRequest struct {
	QueryParams GetDeleteGroupQueryParams
	Headers     GetDeleteGroupHeaders
}

type GetDeleteGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
