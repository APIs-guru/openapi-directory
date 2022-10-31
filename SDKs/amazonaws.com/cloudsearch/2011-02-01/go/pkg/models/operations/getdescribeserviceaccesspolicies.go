package operations




type GetDescribeServiceAccessPoliciesActionEnum string

const (
    GetDescribeServiceAccessPoliciesActionEnumDescribeServiceAccessPolicies GetDescribeServiceAccessPoliciesActionEnum = "DescribeServiceAccessPolicies"
)



type GetDescribeServiceAccessPoliciesVersionEnum string

const (
    GetDescribeServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201 GetDescribeServiceAccessPoliciesVersionEnum = "2011-02-01"
)


type GetDescribeServiceAccessPoliciesQueryParams struct {
    Action GetDescribeServiceAccessPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetDescribeServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeServiceAccessPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeServiceAccessPoliciesRequest struct {
    QueryParams GetDescribeServiceAccessPoliciesQueryParams 
    Headers GetDescribeServiceAccessPoliciesHeaders 
    
}

type GetDescribeServiceAccessPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

