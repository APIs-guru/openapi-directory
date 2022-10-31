package operations

import (
"openapi/pkg/models/shared")

type ListReleaseLabelsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListReleaseLabelsXAmzTargetEnum string

const (
    ListReleaseLabelsXAmzTargetEnumElasticMapReduceListReleaseLabels ListReleaseLabelsXAmzTargetEnum = "ElasticMapReduce.ListReleaseLabels"
)


type ListReleaseLabelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReleaseLabelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReleaseLabelsRequest struct {
    QueryParams ListReleaseLabelsQueryParams 
    Headers ListReleaseLabelsHeaders 
    Request shared.ListReleaseLabelsInput `request:"mediaType=application/json"`
    
}

type ListReleaseLabelsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListReleaseLabelsOutput *shared.ListReleaseLabelsOutput 
    StatusCode int64 
    
}

