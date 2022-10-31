package operations




type GetDescribeCacheParameterGroupsActionEnum string

const (
    GetDescribeCacheParameterGroupsActionEnumDescribeCacheParameterGroups GetDescribeCacheParameterGroupsActionEnum = "DescribeCacheParameterGroups"
)



type GetDescribeCacheParameterGroupsVersionEnum string

const (
    GetDescribeCacheParameterGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeCacheParameterGroupsVersionEnum = "2015-02-02"
)


type GetDescribeCacheParameterGroupsQueryParams struct {
    Action GetDescribeCacheParameterGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheParameterGroupName *string `queryParam:"style=form,explode=true,name=CacheParameterGroupName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version GetDescribeCacheParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeCacheParameterGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeCacheParameterGroupsRequest struct {
    QueryParams GetDescribeCacheParameterGroupsQueryParams 
    Headers GetDescribeCacheParameterGroupsHeaders 
    
}

type GetDescribeCacheParameterGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

