package operations



type ListCloudFrontOriginAccessIdentities20161125QueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    
}

type ListCloudFrontOriginAccessIdentities20161125Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCloudFrontOriginAccessIdentities20161125Request struct {
    QueryParams ListCloudFrontOriginAccessIdentities20161125QueryParams 
    Headers ListCloudFrontOriginAccessIdentities20161125Headers 
    
}

type ListCloudFrontOriginAccessIdentities20161125Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

