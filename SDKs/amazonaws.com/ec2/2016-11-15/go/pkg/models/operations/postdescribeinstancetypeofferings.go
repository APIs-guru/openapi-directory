package operations




type PostDescribeInstanceTypeOfferingsActionEnum string

const (
    PostDescribeInstanceTypeOfferingsActionEnumDescribeInstanceTypeOfferings PostDescribeInstanceTypeOfferingsActionEnum = "DescribeInstanceTypeOfferings"
)



type PostDescribeInstanceTypeOfferingsVersionEnum string

const (
    PostDescribeInstanceTypeOfferingsVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceTypeOfferingsVersionEnum = "2016-11-15"
)


type PostDescribeInstanceTypeOfferingsQueryParams struct {
    Action PostDescribeInstanceTypeOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeInstanceTypeOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeInstanceTypeOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeInstanceTypeOfferingsRequest struct {
    QueryParams PostDescribeInstanceTypeOfferingsQueryParams 
    Headers PostDescribeInstanceTypeOfferingsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeInstanceTypeOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

