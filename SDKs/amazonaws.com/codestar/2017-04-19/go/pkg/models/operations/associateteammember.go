package operations

import (
"openapi/pkg/models/shared")


type AssociateTeamMemberXAmzTargetEnum string

const (
    AssociateTeamMemberXAmzTargetEnumCodeStar20170419AssociateTeamMember AssociateTeamMemberXAmzTargetEnum = "CodeStar_20170419.AssociateTeamMember"
)


type AssociateTeamMemberHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateTeamMemberXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateTeamMemberRequest struct {
    Headers AssociateTeamMemberHeaders 
    Request shared.AssociateTeamMemberRequest `request:"mediaType=application/json"`
    
}

type AssociateTeamMemberResponse struct {
    AssociateTeamMemberResult *shared.AssociateTeamMemberResult 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidServiceRoleException *interface{} 
    LimitExceededException *interface{} 
    ProjectConfigurationException *interface{} 
    ProjectNotFoundException *interface{} 
    StatusCode int64 
    TeamMemberAlreadyAssociatedException *interface{} 
    ValidationException *interface{} 
    
}

