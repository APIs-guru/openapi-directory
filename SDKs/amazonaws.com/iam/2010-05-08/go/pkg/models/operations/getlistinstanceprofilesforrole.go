package operations

type GetListInstanceProfilesForRoleActionEnum string

const (
	GetListInstanceProfilesForRoleActionEnumListInstanceProfilesForRole GetListInstanceProfilesForRoleActionEnum = "ListInstanceProfilesForRole"
)

type GetListInstanceProfilesForRoleVersionEnum string

const (
	GetListInstanceProfilesForRoleVersionEnumTwoThousandAndTen0508 GetListInstanceProfilesForRoleVersionEnum = "2010-05-08"
)

type GetListInstanceProfilesForRoleQueryParams struct {
	Action   GetListInstanceProfilesForRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                                    `queryParam:"style=form,explode=true,name=MaxItems"`
	RoleName string                                    `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetListInstanceProfilesForRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListInstanceProfilesForRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListInstanceProfilesForRoleRequest struct {
	QueryParams GetListInstanceProfilesForRoleQueryParams
	Headers     GetListInstanceProfilesForRoleHeaders
}

type GetListInstanceProfilesForRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
