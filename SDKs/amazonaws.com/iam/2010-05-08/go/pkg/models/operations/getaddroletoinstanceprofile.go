package operations

type GetAddRoleToInstanceProfileActionEnum string

const (
	GetAddRoleToInstanceProfileActionEnumAddRoleToInstanceProfile GetAddRoleToInstanceProfileActionEnum = "AddRoleToInstanceProfile"
)

type GetAddRoleToInstanceProfileVersionEnum string

const (
	GetAddRoleToInstanceProfileVersionEnumTwoThousandAndTen0508 GetAddRoleToInstanceProfileVersionEnum = "2010-05-08"
)

type GetAddRoleToInstanceProfileQueryParams struct {
	Action              GetAddRoleToInstanceProfileActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	InstanceProfileName string                                 `queryParam:"style=form,explode=true,name=InstanceProfileName"`
	RoleName            string                                 `queryParam:"style=form,explode=true,name=RoleName"`
	Version             GetAddRoleToInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAddRoleToInstanceProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAddRoleToInstanceProfileRequest struct {
	QueryParams GetAddRoleToInstanceProfileQueryParams
	Headers     GetAddRoleToInstanceProfileHeaders
}

type GetAddRoleToInstanceProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
