package operations




type PostDeleteConfigurationSetEventDestinationActionEnum string

const (
    PostDeleteConfigurationSetEventDestinationActionEnumDeleteConfigurationSetEventDestination PostDeleteConfigurationSetEventDestinationActionEnum = "DeleteConfigurationSetEventDestination"
)



type PostDeleteConfigurationSetEventDestinationVersionEnum string

const (
    PostDeleteConfigurationSetEventDestinationVersionEnumTwoThousandAndTen1201 PostDeleteConfigurationSetEventDestinationVersionEnum = "2010-12-01"
)


type PostDeleteConfigurationSetEventDestinationQueryParams struct {
    Action PostDeleteConfigurationSetEventDestinationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteConfigurationSetEventDestinationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteConfigurationSetEventDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteConfigurationSetEventDestinationRequest struct {
    QueryParams PostDeleteConfigurationSetEventDestinationQueryParams 
    Headers PostDeleteConfigurationSetEventDestinationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteConfigurationSetEventDestinationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

