package operations

type GetUpdateRoleDescriptionActionEnum string

const (
	GetUpdateRoleDescriptionActionEnumUpdateRoleDescription GetUpdateRoleDescriptionActionEnum = "UpdateRoleDescription"
)

type GetUpdateRoleDescriptionVersionEnum string

const (
	GetUpdateRoleDescriptionVersionEnumTwoThousandAndTen0508 GetUpdateRoleDescriptionVersionEnum = "2010-05-08"
)

type GetUpdateRoleDescriptionQueryParams struct {
	Action      GetUpdateRoleDescriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Description string                              `queryParam:"style=form,explode=true,name=Description"`
	RoleName    string                              `queryParam:"style=form,explode=true,name=RoleName"`
	Version     GetUpdateRoleDescriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateRoleDescriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateRoleDescriptionRequest struct {
	QueryParams GetUpdateRoleDescriptionQueryParams
	Headers     GetUpdateRoleDescriptionHeaders
}

type GetUpdateRoleDescriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
