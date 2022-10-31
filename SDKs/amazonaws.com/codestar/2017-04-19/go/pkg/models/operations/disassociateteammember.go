package operations

import (
"openapi/pkg/models/shared")


type DisassociateTeamMemberXAmzTargetEnum string

const (
    DisassociateTeamMemberXAmzTargetEnumCodeStar20170419DisassociateTeamMember DisassociateTeamMemberXAmzTargetEnum = "CodeStar_20170419.DisassociateTeamMember"
)


type DisassociateTeamMemberHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateTeamMemberXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateTeamMemberRequest struct {
    Headers DisassociateTeamMemberHeaders 
    Request shared.DisassociateTeamMemberRequest `request:"mediaType=application/json"`
    
}

type DisassociateTeamMemberResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DisassociateTeamMemberResult map[string]interface{} 
    InvalidServiceRoleException *interface{} 
    ProjectNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

