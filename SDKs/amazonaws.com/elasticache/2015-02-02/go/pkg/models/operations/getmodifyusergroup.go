package operations

type GetModifyUserGroupActionEnum string

const (
	GetModifyUserGroupActionEnumModifyUserGroup GetModifyUserGroupActionEnum = "ModifyUserGroup"
)

type GetModifyUserGroupVersionEnum string

const (
	GetModifyUserGroupVersionEnumTwoThousandAndFifteen0202 GetModifyUserGroupVersionEnum = "2015-02-02"
)

type GetModifyUserGroupQueryParams struct {
	Action          GetModifyUserGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	UserGroupID     string                        `queryParam:"style=form,explode=true,name=UserGroupId"`
	UserIdsToAdd    []string                      `queryParam:"style=form,explode=true,name=UserIdsToAdd"`
	UserIdsToRemove []string                      `queryParam:"style=form,explode=true,name=UserIdsToRemove"`
	Version         GetModifyUserGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyUserGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyUserGroupRequest struct {
	QueryParams GetModifyUserGroupQueryParams
	Headers     GetModifyUserGroupHeaders
}

type GetModifyUserGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
