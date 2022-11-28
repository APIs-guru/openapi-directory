package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccessPolicyPathParams struct {
	AccessPolicyID string `pathParam:"style=simple,explode=false,name=accessPolicyId"`
}

type UpdateAccessPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAccessPolicyRequestBodyAccessPolicyIdentity
// <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p> </note>
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

// UpdateAccessPolicyRequestBodyAccessPolicyResource
// Contains an IoT SiteWise Monitor resource ID for a portal or project.
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
