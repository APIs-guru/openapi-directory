package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoleAliasPathParams struct {
	RoleAlias string `pathParam:"style=simple,explode=false,name=roleAlias"`
}

type CreateRoleAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRoleAliasRequestBody struct {
	CredentialDurationSeconds *int64       `json:"credentialDurationSeconds"`
	RoleArn                   string       `json:"roleArn"`
	Tags                      []shared.Tag `json:"tags"`
}

type CreateRoleAliasRequest struct {
	PathParams CreateRoleAliasPathParams
	Headers    CreateRoleAliasHeaders
	Request    CreateRoleAliasRequestBody `request:"mediaType=application/json"`
}

type CreateRoleAliasResponse struct {
	ContentType                    string
	CreateRoleAliasResponse        *shared.CreateRoleAliasResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
