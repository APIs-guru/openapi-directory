package operations




type PostDescribeCacheClustersActionEnum string

const (
    PostDescribeCacheClustersActionEnumDescribeCacheClusters PostDescribeCacheClustersActionEnum = "DescribeCacheClusters"
)



type PostDescribeCacheClustersVersionEnum string

const (
    PostDescribeCacheClustersVersionEnumTwoThousandAndFifteen0202 PostDescribeCacheClustersVersionEnum = "2015-02-02"
)


type PostDescribeCacheClustersQueryParams struct {
    Action PostDescribeCacheClustersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeCacheClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeCacheClustersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeCacheClustersRequest struct {
    QueryParams PostDescribeCacheClustersQueryParams 
    Headers PostDescribeCacheClustersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeCacheClustersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

