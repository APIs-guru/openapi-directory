package operations



type DeleteServiceLinkedRole20170325PathParams struct {
    RoleName string `pathParam:"style=simple,explode=false,name=RoleName"`
    
}

type DeleteServiceLinkedRole20170325Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteServiceLinkedRole20170325Request struct {
    PathParams DeleteServiceLinkedRole20170325PathParams 
    Headers DeleteServiceLinkedRole20170325Headers 
    
}

type DeleteServiceLinkedRole20170325Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

