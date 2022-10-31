package operations




type PostGetCoipPoolUsageActionEnum string

const (
    PostGetCoipPoolUsageActionEnumGetCoipPoolUsage PostGetCoipPoolUsageActionEnum = "GetCoipPoolUsage"
)



type PostGetCoipPoolUsageVersionEnum string

const (
    PostGetCoipPoolUsageVersionEnumTwoThousandAndSixteen1115 PostGetCoipPoolUsageVersionEnum = "2016-11-15"
)


type PostGetCoipPoolUsageQueryParams struct {
    Action PostGetCoipPoolUsageActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetCoipPoolUsageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetCoipPoolUsageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetCoipPoolUsageRequest struct {
    QueryParams PostGetCoipPoolUsageQueryParams 
    Headers PostGetCoipPoolUsageHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetCoipPoolUsageResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

