package operations

type PostAssociateEnvironmentOperationsRoleActionEnum string

const (
	PostAssociateEnvironmentOperationsRoleActionEnumAssociateEnvironmentOperationsRole PostAssociateEnvironmentOperationsRoleActionEnum = "AssociateEnvironmentOperationsRole"
)

type PostAssociateEnvironmentOperationsRoleVersionEnum string

const (
	PostAssociateEnvironmentOperationsRoleVersionEnumTwoThousandAndTen1201 PostAssociateEnvironmentOperationsRoleVersionEnum = "2010-12-01"
)

type PostAssociateEnvironmentOperationsRoleQueryParams struct {
	Action  PostAssociateEnvironmentOperationsRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateEnvironmentOperationsRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateEnvironmentOperationsRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateEnvironmentOperationsRoleRequest struct {
	QueryParams PostAssociateEnvironmentOperationsRoleQueryParams
	Headers     PostAssociateEnvironmentOperationsRoleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateEnvironmentOperationsRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
