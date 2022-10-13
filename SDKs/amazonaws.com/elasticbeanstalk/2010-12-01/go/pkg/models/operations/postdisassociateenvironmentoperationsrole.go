package operations

type PostDisassociateEnvironmentOperationsRoleActionEnum string

const (
	PostDisassociateEnvironmentOperationsRoleActionEnumDisassociateEnvironmentOperationsRole PostDisassociateEnvironmentOperationsRoleActionEnum = "DisassociateEnvironmentOperationsRole"
)

type PostDisassociateEnvironmentOperationsRoleVersionEnum string

const (
	PostDisassociateEnvironmentOperationsRoleVersionEnumTwoThousandAndTen1201 PostDisassociateEnvironmentOperationsRoleVersionEnum = "2010-12-01"
)

type PostDisassociateEnvironmentOperationsRoleQueryParams struct {
	Action  PostDisassociateEnvironmentOperationsRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateEnvironmentOperationsRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateEnvironmentOperationsRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateEnvironmentOperationsRoleRequest struct {
	QueryParams PostDisassociateEnvironmentOperationsRoleQueryParams
	Headers     PostDisassociateEnvironmentOperationsRoleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateEnvironmentOperationsRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
