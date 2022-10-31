package operations




type PostGetLaunchTemplateDataActionEnum string

const (
    PostGetLaunchTemplateDataActionEnumGetLaunchTemplateData PostGetLaunchTemplateDataActionEnum = "GetLaunchTemplateData"
)



type PostGetLaunchTemplateDataVersionEnum string

const (
    PostGetLaunchTemplateDataVersionEnumTwoThousandAndSixteen1115 PostGetLaunchTemplateDataVersionEnum = "2016-11-15"
)


type PostGetLaunchTemplateDataQueryParams struct {
    Action PostGetLaunchTemplateDataActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetLaunchTemplateDataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetLaunchTemplateDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetLaunchTemplateDataRequest struct {
    QueryParams PostGetLaunchTemplateDataQueryParams 
    Headers PostGetLaunchTemplateDataHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetLaunchTemplateDataResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

