package operations

type GetUpdateAssumeRolePolicyActionEnum string

const (
	GetUpdateAssumeRolePolicyActionEnumUpdateAssumeRolePolicy GetUpdateAssumeRolePolicyActionEnum = "UpdateAssumeRolePolicy"
)

type GetUpdateAssumeRolePolicyVersionEnum string

const (
	GetUpdateAssumeRolePolicyVersionEnumTwoThousandAndTen0508 GetUpdateAssumeRolePolicyVersionEnum = "2010-05-08"
)

type GetUpdateAssumeRolePolicyQueryParams struct {
	Action         GetUpdateAssumeRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyDocument string                               `queryParam:"style=form,explode=true,name=PolicyDocument"`
	RoleName       string                               `queryParam:"style=form,explode=true,name=RoleName"`
	Version        GetUpdateAssumeRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateAssumeRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateAssumeRolePolicyRequest struct {
	QueryParams GetUpdateAssumeRolePolicyQueryParams
	Headers     GetUpdateAssumeRolePolicyHeaders
}

type GetUpdateAssumeRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
