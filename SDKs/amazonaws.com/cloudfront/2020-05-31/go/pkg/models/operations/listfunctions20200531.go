package operations




type ListFunctions20200531StageEnum string

const (
    ListFunctions20200531StageEnumDevelopment ListFunctions20200531StageEnum = "DEVELOPMENT"
ListFunctions20200531StageEnumLive ListFunctions20200531StageEnum = "LIVE"
)


type ListFunctions20200531QueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Stage *ListFunctions20200531StageEnum `queryParam:"style=form,explode=true,name=Stage"`
    
}

type ListFunctions20200531Headers struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListFunctions20200531Request struct {
    QueryParams ListFunctions20200531QueryParams 
    Headers ListFunctions20200531Headers 
    
}

type ListFunctions20200531Response struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

