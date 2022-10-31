package operations



type ListDistributionsByKeyGroup20200531PathParams struct {
    KeyGroupID string `pathParam:"style=simple,explode=false,name=KeyGroupId"`
    
}

type ListDistributionsByKeyGroup20200531QueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListDistributionsByKeyGroup20200531Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDistributionsByKeyGroup20200531Request struct {
    PathParams ListDistributionsByKeyGroup20200531PathParams 
    QueryParams ListDistributionsByKeyGroup20200531QueryParams 
    Headers ListDistributionsByKeyGroup20200531Headers 
    
}

type ListDistributionsByKeyGroup20200531Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

