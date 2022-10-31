package operations

import (
"openapi/pkg/models/shared")

type ListTaskDefinitionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListTaskDefinitionsXAmzTargetEnum string

const (
    ListTaskDefinitionsXAmzTargetEnumAmazonEc2ContainerServiceV20141113ListTaskDefinitions ListTaskDefinitionsXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions"
)


type ListTaskDefinitionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTaskDefinitionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTaskDefinitionsRequest struct {
    QueryParams ListTaskDefinitionsQueryParams 
    Headers ListTaskDefinitionsHeaders 
    Request shared.ListTaskDefinitionsRequest `request:"mediaType=application/json"`
    
}

type ListTaskDefinitionsResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ListTaskDefinitionsResponse *shared.ListTaskDefinitionsResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

