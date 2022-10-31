package operations




type GetGetServiceLastAccessedDetailsWithEntitiesActionEnum string

const (
    GetGetServiceLastAccessedDetailsWithEntitiesActionEnumGetServiceLastAccessedDetailsWithEntities GetGetServiceLastAccessedDetailsWithEntitiesActionEnum = "GetServiceLastAccessedDetailsWithEntities"
)



type GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum string

const (
    GetGetServiceLastAccessedDetailsWithEntitiesVersionEnumTwoThousandAndTen0508 GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum = "2010-05-08"
)


type GetGetServiceLastAccessedDetailsWithEntitiesQueryParams struct {
    Action GetGetServiceLastAccessedDetailsWithEntitiesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    JobID string `queryParam:"style=form,explode=true,name=JobId"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    ServiceNamespace string `queryParam:"style=form,explode=true,name=ServiceNamespace"`
    Version GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetServiceLastAccessedDetailsWithEntitiesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetServiceLastAccessedDetailsWithEntitiesRequest struct {
    QueryParams GetGetServiceLastAccessedDetailsWithEntitiesQueryParams 
    Headers GetGetServiceLastAccessedDetailsWithEntitiesHeaders 
    
}

type GetGetServiceLastAccessedDetailsWithEntitiesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

