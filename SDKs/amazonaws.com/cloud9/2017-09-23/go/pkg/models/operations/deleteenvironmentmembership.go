package operations

import (
"openapi/pkg/models/shared")


type DeleteEnvironmentMembershipXAmzTargetEnum string

const (
    DeleteEnvironmentMembershipXAmzTargetEnumAwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembership DeleteEnvironmentMembershipXAmzTargetEnum = "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership"
)


type DeleteEnvironmentMembershipHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteEnvironmentMembershipXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteEnvironmentMembershipRequest struct {
    Headers DeleteEnvironmentMembershipHeaders 
    Request shared.DeleteEnvironmentMembershipRequest `request:"mediaType=application/json"`
    
}

type DeleteEnvironmentMembershipResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteEnvironmentMembershipResult map[string]interface{} 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

