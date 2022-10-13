package operations

type GetUpdateAccountPasswordPolicyActionEnum string

const (
	GetUpdateAccountPasswordPolicyActionEnumUpdateAccountPasswordPolicy GetUpdateAccountPasswordPolicyActionEnum = "UpdateAccountPasswordPolicy"
)

type GetUpdateAccountPasswordPolicyVersionEnum string

const (
	GetUpdateAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 GetUpdateAccountPasswordPolicyVersionEnum = "2010-05-08"
)

type GetUpdateAccountPasswordPolicyQueryParams struct {
	Action                     GetUpdateAccountPasswordPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AllowUsersToChangePassword *bool                                     `queryParam:"style=form,explode=true,name=AllowUsersToChangePassword"`
	HardExpiry                 *bool                                     `queryParam:"style=form,explode=true,name=HardExpiry"`
	MaxPasswordAge             *int64                                    `queryParam:"style=form,explode=true,name=MaxPasswordAge"`
	MinimumPasswordLength      *int64                                    `queryParam:"style=form,explode=true,name=MinimumPasswordLength"`
	PasswordReusePrevention    *int64                                    `queryParam:"style=form,explode=true,name=PasswordReusePrevention"`
	RequireLowercaseCharacters *bool                                     `queryParam:"style=form,explode=true,name=RequireLowercaseCharacters"`
	RequireNumbers             *bool                                     `queryParam:"style=form,explode=true,name=RequireNumbers"`
	RequireSymbols             *bool                                     `queryParam:"style=form,explode=true,name=RequireSymbols"`
	RequireUppercaseCharacters *bool                                     `queryParam:"style=form,explode=true,name=RequireUppercaseCharacters"`
	Version                    GetUpdateAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateAccountPasswordPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateAccountPasswordPolicyRequest struct {
	QueryParams GetUpdateAccountPasswordPolicyQueryParams
	Headers     GetUpdateAccountPasswordPolicyHeaders
}

type GetUpdateAccountPasswordPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
