package operations




type PostUpdateAvailabilityOptionsActionEnum string

const (
    PostUpdateAvailabilityOptionsActionEnumUpdateAvailabilityOptions PostUpdateAvailabilityOptionsActionEnum = "UpdateAvailabilityOptions"
)



type PostUpdateAvailabilityOptionsVersionEnum string

const (
    PostUpdateAvailabilityOptionsVersionEnumTwoThousandAndEleven0201 PostUpdateAvailabilityOptionsVersionEnum = "2011-02-01"
)


type PostUpdateAvailabilityOptionsQueryParams struct {
    Action PostUpdateAvailabilityOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateAvailabilityOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateAvailabilityOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateAvailabilityOptionsRequest struct {
    QueryParams PostUpdateAvailabilityOptionsQueryParams 
    Headers PostUpdateAvailabilityOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateAvailabilityOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

