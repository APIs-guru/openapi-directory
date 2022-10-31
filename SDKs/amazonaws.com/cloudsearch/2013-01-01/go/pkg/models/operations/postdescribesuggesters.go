package operations




type PostDescribeSuggestersActionEnum string

const (
    PostDescribeSuggestersActionEnumDescribeSuggesters PostDescribeSuggestersActionEnum = "DescribeSuggesters"
)



type PostDescribeSuggestersVersionEnum string

const (
    PostDescribeSuggestersVersionEnumTwoThousandAndThirteen0101 PostDescribeSuggestersVersionEnum = "2013-01-01"
)


type PostDescribeSuggestersQueryParams struct {
    Action PostDescribeSuggestersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeSuggestersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSuggestersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSuggestersRequest struct {
    QueryParams PostDescribeSuggestersQueryParams 
    Headers PostDescribeSuggestersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSuggestersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

