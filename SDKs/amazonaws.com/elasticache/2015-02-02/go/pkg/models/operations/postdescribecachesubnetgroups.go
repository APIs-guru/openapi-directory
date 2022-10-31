package operations




type PostDescribeCacheSubnetGroupsActionEnum string

const (
    PostDescribeCacheSubnetGroupsActionEnumDescribeCacheSubnetGroups PostDescribeCacheSubnetGroupsActionEnum = "DescribeCacheSubnetGroups"
)



type PostDescribeCacheSubnetGroupsVersionEnum string

const (
    PostDescribeCacheSubnetGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheSubnetGroupsVersionEnum = "2015-02-02"
)


type PostDescribeCacheSubnetGroupsQueryParams struct {
    Action PostDescribeCacheSubnetGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeCacheSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeCacheSubnetGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeCacheSubnetGroupsRequest struct {
    QueryParams PostDescribeCacheSubnetGroupsQueryParams 
    Headers PostDescribeCacheSubnetGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeCacheSubnetGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

