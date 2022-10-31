package operations

import (
"openapi/pkg/models/shared")


type UpdateEnvironmentMembershipXAmzTargetEnum string

const (
    UpdateEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembership UpdateEnvironmentMembershipXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership"
)


type UpdateEnvironmentMembershipHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateEnvironmentMembershipXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateEnvironmentMembershipRequest struct {
    Headers UpdateEnvironmentMembershipHeaders 
    Request shared.UpdateEnvironmentMembershipRequest `request:"mediaType=application/json"`
    
}

type UpdateEnvironmentMembershipResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateEnvironmentMembershipResult *shared.UpdateEnvironmentMembershipResult 
    
}

