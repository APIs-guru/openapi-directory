package operations



type UpdateDistribution20170325PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type UpdateDistribution20170325Headers struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDistribution20170325Request struct {
    PathParams UpdateDistribution20170325PathParams 
    Headers UpdateDistribution20170325Headers 
    Request []byte `request:"mediaType=text/xml"`
    
}

type UpdateDistribution20170325Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

