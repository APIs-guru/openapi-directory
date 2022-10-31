package operations

import (
"openapi/pkg/models/shared")


type ListUserProfilesXAmzTargetEnum string

const (
    ListUserProfilesXAmzTargetEnumCodeStar20170419ListUserProfiles ListUserProfilesXAmzTargetEnum = "CodeStar_20170419.ListUserProfiles"
)


type ListUserProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListUserProfilesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListUserProfilesRequest struct {
    Headers ListUserProfilesHeaders 
    Request shared.ListUserProfilesRequest `request:"mediaType=application/json"`
    
}

type ListUserProfilesResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListUserProfilesResult *shared.ListUserProfilesResult 
    StatusCode int64 
    ValidationException *interface{} 
    
}

