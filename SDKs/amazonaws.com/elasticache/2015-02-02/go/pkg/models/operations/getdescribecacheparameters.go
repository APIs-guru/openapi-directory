package operations




type GetDescribeCacheParametersActionEnum string

const (
    GetDescribeCacheParametersActionEnumDescribeCacheParameters GetDescribeCacheParametersActionEnum = "DescribeCacheParameters"
)



type GetDescribeCacheParametersVersionEnum string

const (
    GetDescribeCacheParametersVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheParametersVersionEnum = "2015-02-02"
)


type GetDescribeCacheParametersQueryParams struct {
    Action GetDescribeCacheParametersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheParameterGroupName string `queryParam:"style=form,explode=true,name=CacheParameterGroupName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    Source *string `queryParam:"style=form,explode=true,name=Source"`
    Version GetDescribeCacheParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeCacheParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeCacheParametersRequest struct {
    QueryParams GetDescribeCacheParametersQueryParams 
    Headers GetDescribeCacheParametersHeaders 
    
}

type GetDescribeCacheParametersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

