package operations




type PostDescribeSslPoliciesActionEnum string

const (
    PostDescribeSslPoliciesActionEnumDescribeSslPolicies PostDescribeSslPoliciesActionEnum = "DescribeSSLPolicies"
)



type PostDescribeSslPoliciesVersionEnum string

const (
    PostDescribeSslPoliciesVersionEnumTwoThousandAndFifteen1201 PostDescribeSslPoliciesVersionEnum = "2015-12-01"
)


type PostDescribeSslPoliciesQueryParams struct {
    Action PostDescribeSslPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeSslPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeSslPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeSslPoliciesRequest struct {
    QueryParams PostDescribeSslPoliciesQueryParams 
    Headers PostDescribeSslPoliciesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeSslPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

