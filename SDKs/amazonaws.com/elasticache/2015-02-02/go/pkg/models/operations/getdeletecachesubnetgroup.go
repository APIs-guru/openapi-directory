package operations




type GetDeleteCacheSubnetGroupActionEnum string

const (
    GetDeleteCacheSubnetGroupActionEnumDeleteCacheSubnetGroup GetDeleteCacheSubnetGroupActionEnum = "DeleteCacheSubnetGroup"
)



type GetDeleteCacheSubnetGroupVersionEnum string

const (
    GetDeleteCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteCacheSubnetGroupVersionEnum = "2015-02-02"
)


type GetDeleteCacheSubnetGroupQueryParams struct {
    Action GetDeleteCacheSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheSubnetGroupName string `queryParam:"style=form,explode=true,name=CacheSubnetGroupName"`
    Version GetDeleteCacheSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteCacheSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteCacheSubnetGroupRequest struct {
    QueryParams GetDeleteCacheSubnetGroupQueryParams 
    Headers GetDeleteCacheSubnetGroupHeaders 
    
}

type GetDeleteCacheSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

