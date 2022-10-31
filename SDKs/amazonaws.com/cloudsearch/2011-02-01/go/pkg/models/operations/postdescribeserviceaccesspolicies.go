package operations




type PostDescribeServiceAccessPoliciesActionEnum string

const (
    PostDescribeServiceAccessPoliciesActionEnumDescribeServiceAccessPolicies PostDescribeServiceAccessPoliciesActionEnum = "DescribeServiceAccessPolicies"
)



type PostDescribeServiceAccessPoliciesVersionEnum string

const (
    PostDescribeServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201 PostDescribeServiceAccessPoliciesVersionEnum = "2011-02-01"
)


type PostDescribeServiceAccessPoliciesQueryParams struct {
    Action PostDescribeServiceAccessPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeServiceAccessPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeServiceAccessPoliciesRequest struct {
    QueryParams PostDescribeServiceAccessPoliciesQueryParams 
    Headers PostDescribeServiceAccessPoliciesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeServiceAccessPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

