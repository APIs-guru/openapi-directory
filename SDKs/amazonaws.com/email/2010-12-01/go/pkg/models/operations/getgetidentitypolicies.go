package operations




type GetGetIdentityPoliciesActionEnum string

const (
    GetGetIdentityPoliciesActionEnumGetIdentityPolicies GetGetIdentityPoliciesActionEnum = "GetIdentityPolicies"
)



type GetGetIdentityPoliciesVersionEnum string

const (
    GetGetIdentityPoliciesVersionEnumTwoThousandAndTen1201 GetGetIdentityPoliciesVersionEnum = "2010-12-01"
)


type GetGetIdentityPoliciesQueryParams struct {
    Action GetGetIdentityPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Identity string `queryParam:"style=form,explode=true,name=Identity"`
    PolicyNames []string `queryParam:"style=form,explode=true,name=PolicyNames"`
    Version GetGetIdentityPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetIdentityPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetIdentityPoliciesRequest struct {
    QueryParams GetGetIdentityPoliciesQueryParams 
    Headers GetGetIdentityPoliciesHeaders 
    
}

type GetGetIdentityPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

