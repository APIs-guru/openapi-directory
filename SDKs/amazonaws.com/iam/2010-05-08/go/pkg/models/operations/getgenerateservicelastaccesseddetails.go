package operations




type GetGenerateServiceLastAccessedDetailsActionEnum string

const (
    GetGenerateServiceLastAccessedDetailsActionEnumGenerateServiceLastAccessedDetails GetGenerateServiceLastAccessedDetailsActionEnum = "GenerateServiceLastAccessedDetails"
)



type GetGenerateServiceLastAccessedDetailsGranularityEnum string

const (
    GetGenerateServiceLastAccessedDetailsGranularityEnumServiceLevel GetGenerateServiceLastAccessedDetailsGranularityEnum = "SERVICE_LEVEL"
GetGenerateServiceLastAccessedDetailsGranularityEnumActionLevel GetGenerateServiceLastAccessedDetailsGranularityEnum = "ACTION_LEVEL"
)



type GetGenerateServiceLastAccessedDetailsVersionEnum string

const (
    GetGenerateServiceLastAccessedDetailsVersionEnumTwoThousandAndTen0508 GetGenerateServiceLastAccessedDetailsVersionEnum = "2010-05-08"
)


type GetGenerateServiceLastAccessedDetailsQueryParams struct {
    Action GetGenerateServiceLastAccessedDetailsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Arn string `queryParam:"style=form,explode=true,name=Arn"`
    Granularity *GetGenerateServiceLastAccessedDetailsGranularityEnum `queryParam:"style=form,explode=true,name=Granularity"`
    Version GetGenerateServiceLastAccessedDetailsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGenerateServiceLastAccessedDetailsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGenerateServiceLastAccessedDetailsRequest struct {
    QueryParams GetGenerateServiceLastAccessedDetailsQueryParams 
    Headers GetGenerateServiceLastAccessedDetailsHeaders 
    
}

type GetGenerateServiceLastAccessedDetailsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

