package operations

import (
"openapi/pkg/models/shared")

type CreateAccessPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAccessPolicyRequestBodyAccessPolicyIdentity struct {
    Group *shared.GroupIdentity `json:"group,omitempty"`
    IamRole *shared.IamRoleIdentity `json:"iamRole,omitempty"`
    IamUser *shared.IamUserIdentity `json:"iamUser,omitempty"`
    User *shared.UserIdentity `json:"user,omitempty"`
    
}


type CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum string

const (
    CreateAccessPolicyRequestBodyAccessPolicyPermissionEnumAdministrator CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "ADMINISTRATOR"
CreateAccessPolicyRequestBodyAccessPolicyPermissionEnumViewer CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum = "VIEWER"
)


type CreateAccessPolicyRequestBodyAccessPolicyResource struct {
    Portal *shared.PortalResource `json:"portal,omitempty"`
    Project *shared.ProjectResource `json:"project,omitempty"`
    
}

type CreateAccessPolicyRequestBody struct {
    AccessPolicyIdentity CreateAccessPolicyRequestBodyAccessPolicyIdentity `json:"accessPolicyIdentity"`
    AccessPolicyPermission CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum `json:"accessPolicyPermission"`
    AccessPolicyResource CreateAccessPolicyRequestBodyAccessPolicyResource `json:"accessPolicyResource"`
    ClientToken *string `json:"clientToken,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateAccessPolicyRequest struct {
    Headers CreateAccessPolicyHeaders 
    Request CreateAccessPolicyRequestBody `request:"mediaType=application/json"`
    
}

type CreateAccessPolicyResponse struct {
    ContentType string 
    CreateAccessPolicyResponse *shared.CreateAccessPolicyResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

