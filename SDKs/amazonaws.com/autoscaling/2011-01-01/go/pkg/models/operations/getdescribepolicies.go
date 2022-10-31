package operations




type GetDescribePoliciesActionEnum string

const (
    GetDescribePoliciesActionEnumDescribePolicies GetDescribePoliciesActionEnum = "DescribePolicies"
)



type GetDescribePoliciesVersionEnum string

const (
    GetDescribePoliciesVersionEnumTwoThousandAndEleven0101 GetDescribePoliciesVersionEnum = "2011-01-01"
)


type GetDescribePoliciesQueryParams struct {
    Action GetDescribePoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName *string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PolicyNames []string `queryParam:"style=form,explode=true,name=PolicyNames"`
    PolicyTypes []string `queryParam:"style=form,explode=true,name=PolicyTypes"`
    Version GetDescribePoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribePoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribePoliciesRequest struct {
    QueryParams GetDescribePoliciesQueryParams 
    Headers GetDescribePoliciesHeaders 
    
}

type GetDescribePoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

