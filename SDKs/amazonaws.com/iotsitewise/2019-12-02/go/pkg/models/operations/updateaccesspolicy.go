package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccessPolicyPathParams struct {
	AccessPolicyID string `pathParam:"style=simple,explode=false,name=accessPolicyId"`
}

type UpdateAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAccessPolicyRequestBodyAccessPolicyIdentity struct {
	Group   *shared.GroupIdentity   `json:"group,omitempty"`
	IamRole *shared.IamRoleIdentity `json:"iamRole,omitempty"`
	IamUser *shared.IamUserIdentity `json:"iamUser,omitempty"`
	User    *shared.UserIdentity    `json:"user,omitempty"`
}

type UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum string

const (
	UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnumAdministrator UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "ADMINISTRATOR"
	UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnumViewer        UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "VIEWER"
)

type UpdateAccessPolicyRequestBodyAccessPolicyResource struct {
	Portal  *shared.PortalResource  `json:"portal,omitempty"`
	Project *shared.ProjectResource `json:"project,omitempty"`
}

type UpdateAccessPolicyRequestBody struct {
	AccessPolicyIdentity   UpdateAccessPolicyRequestBodyAccessPolicyIdentity       `json:"accessPolicyIdentity"`
	AccessPolicyPermission UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum `json:"accessPolicyPermission"`
	AccessPolicyResource   UpdateAccessPolicyRequestBodyAccessPolicyResource       `json:"accessPolicyResource"`
	ClientToken            *string                                                 `json:"clientToken,omitempty"`
}

type UpdateAccessPolicyRequest struct {
	PathParams UpdateAccessPolicyPathParams
	Headers    UpdateAccessPolicyHeaders
	Request    UpdateAccessPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateAccessPolicyResponse struct {
	ContentType                string
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateAccessPolicyResponse map[string]interface{}
}
