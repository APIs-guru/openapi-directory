package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAccessPolicyRequestBodyAccessPolicyIdentity struct {
	Group   *shared.GroupIdentity   `json:"group"`
	IamRole *shared.IamRoleIdentity `json:"iamRole"`
	IamUser *shared.IamUserIdentity `json:"iamUser"`
	User    *shared.UserIdentity    `json:"user"`
}

type CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum string

const (
	CreateAccessPolicyRequestBodyAccessPolicyPermissionEnumAdministrator CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "ADMINISTRATOR"
	CreateAccessPolicyRequestBodyAccessPolicyPermissionEnumViewer        CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "VIEWER"
)

type CreateAccessPolicyRequestBodyAccessPolicyResource struct {
	Portal  *shared.PortalResource  `json:"portal"`
	Project *shared.ProjectResource `json:"project"`
}

type CreateAccessPolicyRequestBody struct {
	AccessPolicyIdentity   CreateAccessPolicyRequestBodyAccessPolicyIdentity       `json:"accessPolicyIdentity"`
	AccessPolicyPermission CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum `json:"accessPolicyPermission"`
	AccessPolicyResource   CreateAccessPolicyRequestBodyAccessPolicyResource       `json:"accessPolicyResource"`
	ClientToken            *string                                                 `json:"clientToken"`
	Tags                   map[string]string                                       `json:"tags"`
}

type CreateAccessPolicyRequest struct {
	Headers CreateAccessPolicyHeaders
	Request CreateAccessPolicyRequestBody `request:"mediaType=application/json"`
}

type CreateAccessPolicyResponse struct {
	ContentType                string
	CreateAccessPolicyResponse *shared.CreateAccessPolicyResponse
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
}
