package operations




type GetGetServiceLastAccessedDetailsActionEnum string

const (
    GetGetServiceLastAccessedDetailsActionEnumGetServiceLastAccessedDetails GetGetServiceLastAccessedDetailsActionEnum = "GetServiceLastAccessedDetails"
)



type GetGetServiceLastAccessedDetailsVersionEnum string

const (
    GetGetServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508 GetGetServiceLastAccessedDetailsVersionEnum = "2010-05-08"
)


type GetGetServiceLastAccessedDetailsQueryParams struct {
    Action GetGetServiceLastAccessedDetailsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    JobID string `queryParam:"style=form,explode=true,name=JobId"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    Version GetGetServiceLastAccessedDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetServiceLastAccessedDetailsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetServiceLastAccessedDetailsRequest struct {
    QueryParams GetGetServiceLastAccessedDetailsQueryParams 
    Headers GetGetServiceLastAccessedDetailsHeaders 
    
}

type GetGetServiceLastAccessedDetailsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

