package operations




type GetGetLoginProfileActionEnum string

const (
    GetGetLoginProfileActionEnumGetLoginProfile GetGetLoginProfileActionEnum = "GetLoginProfile"
)



type GetGetLoginProfileVersionEnum string

const (
    GetGetLoginProfileVersionEnumTwoThousandAndTen0508 GetGetLoginProfileVersionEnum = "2010-05-08"
)


type GetGetLoginProfileQueryParams struct {
    Action GetGetLoginProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetGetLoginProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetLoginProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetLoginProfileRequest struct {
    QueryParams GetGetLoginProfileQueryParams 
    Headers GetGetLoginProfileHeaders 
    
}

type GetGetLoginProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

