package operations



type ListCloudFrontOriginAccessIdentities20181105QueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListCloudFrontOriginAccessIdentities20181105Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCloudFrontOriginAccessIdentities20181105Request struct {
    QueryParams ListCloudFrontOriginAccessIdentities20181105QueryParams 
    Headers ListCloudFrontOriginAccessIdentities20181105Headers 
    
}

type ListCloudFrontOriginAccessIdentities20181105Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

