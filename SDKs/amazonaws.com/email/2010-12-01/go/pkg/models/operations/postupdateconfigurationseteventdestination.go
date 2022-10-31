package operations




type PostUpdateConfigurationSetEventDestinationActionEnum string

const (
    PostUpdateConfigurationSetEventDestinationActionEnumUpdateConfigurationSetEventDestination PostUpdateConfigurationSetEventDestinationActionEnum = "UpdateConfigurationSetEventDestination"
)



type PostUpdateConfigurationSetEventDestinationVersionEnum string

const (
    PostUpdateConfigurationSetEventDestinationVersionEnumTwoThousandAndTen1201 PostUpdateConfigurationSetEventDestinationVersionEnum = "2010-12-01"
)


type PostUpdateConfigurationSetEventDestinationQueryParams struct {
    Action PostUpdateConfigurationSetEventDestinationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateConfigurationSetEventDestinationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateConfigurationSetEventDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateConfigurationSetEventDestinationRequest struct {
    QueryParams PostUpdateConfigurationSetEventDestinationQueryParams 
    Headers PostUpdateConfigurationSetEventDestinationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateConfigurationSetEventDestinationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

