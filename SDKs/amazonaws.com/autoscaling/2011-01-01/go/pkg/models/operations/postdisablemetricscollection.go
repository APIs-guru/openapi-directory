package operations




type PostDisableMetricsCollectionActionEnum string

const (
    PostDisableMetricsCollectionActionEnumDisableMetricsCollection PostDisableMetricsCollectionActionEnum = "DisableMetricsCollection"
)



type PostDisableMetricsCollectionVersionEnum string

const (
    PostDisableMetricsCollectionVersionEnumTwoThousandAndEleven0101 PostDisableMetricsCollectionVersionEnum = "2011-01-01"
)


type PostDisableMetricsCollectionQueryParams struct {
    Action PostDisableMetricsCollectionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisableMetricsCollectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisableMetricsCollectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisableMetricsCollectionRequest struct {
    QueryParams PostDisableMetricsCollectionQueryParams 
    Headers PostDisableMetricsCollectionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisableMetricsCollectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

