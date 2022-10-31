package operations




type DeleteV2LoggingLevelTargetTypeEnum string

const (
    DeleteV2LoggingLevelTargetTypeEnumDefault DeleteV2LoggingLevelTargetTypeEnum = "DEFAULT"
DeleteV2LoggingLevelTargetTypeEnumThingGroup DeleteV2LoggingLevelTargetTypeEnum = "THING_GROUP"
)


type DeleteV2LoggingLevelQueryParams struct {
    TargetName string `queryParam:"style=form,explode=true,name=targetName"`
    TargetType DeleteV2LoggingLevelTargetTypeEnum `queryParam:"style=form,explode=true,name=targetType"`
    
}

type DeleteV2LoggingLevelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteV2LoggingLevelRequest struct {
    QueryParams DeleteV2LoggingLevelQueryParams 
    Headers DeleteV2LoggingLevelHeaders 
    
}

type DeleteV2LoggingLevelResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

