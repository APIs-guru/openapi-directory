package operations

import (
"openapi/pkg/models/shared")

type ListAccountSettingsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListAccountSettingsXAmzTargetEnum string

const (
    ListAccountSettingsXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListAccountSettings ListAccountSettingsXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListAccountSettings"
)


type ListAccountSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAccountSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAccountSettingsRequest struct {
    QueryParams ListAccountSettingsQueryParams 
    Headers ListAccountSettingsHeaders 
    Request shared.ListAccountSettingsRequest `request:"mediaType=application/json"`
    
}

type ListAccountSettingsResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ListAccountSettingsResponse *shared.ListAccountSettingsResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

