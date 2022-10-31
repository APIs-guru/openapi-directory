package operations




type GetModifyCacheSubnetGroupActionEnum string

const (
    GetModifyCacheSubnetGroupActionEnumModifyCacheSubnetGroup GetModifyCacheSubnetGroupActionEnum = "ModifyCacheSubnetGroup"
)



type GetModifyCacheSubnetGroupVersionEnum string

const (
    GetModifyCacheSubnetGroupVersionEnumTwoThousandAndFifteen0202 GetModifyCacheSubnetGroupVersionEnum = "2015-02-02"
)


type GetModifyCacheSubnetGroupQueryParams struct {
    Action GetModifyCacheSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheSubnetGroupDescription *string `queryParam:"style=form,explode=true,name=CacheSubnetGroupDescription"`
    CacheSubnetGroupName string `queryParam:"style=form,explode=true,name=CacheSubnetGroupName"`
    SubnetIds []string `queryParam:"style=form,explode=true,name=SubnetIds"`
    Version GetModifyCacheSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyCacheSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyCacheSubnetGroupRequest struct {
    QueryParams GetModifyCacheSubnetGroupQueryParams 
    Headers GetModifyCacheSubnetGroupHeaders 
    
}

type GetModifyCacheSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

