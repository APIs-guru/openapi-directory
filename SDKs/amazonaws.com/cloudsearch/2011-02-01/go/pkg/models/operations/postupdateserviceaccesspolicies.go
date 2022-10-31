package operations




type PostUpdateServiceAccessPoliciesActionEnum string

const (
    PostUpdateServiceAccessPoliciesActionEnumUpdateServiceAccessPolicies PostUpdateServiceAccessPoliciesActionEnum = "UpdateServiceAccessPolicies"
)



type PostUpdateServiceAccessPoliciesVersionEnum string

const (
    PostUpdateServiceAccessPoliciesVersionEnumTwoThousandAndEleven0201 PostUpdateServiceAccessPoliciesVersionEnum = "2011-02-01"
)


type PostUpdateServiceAccessPoliciesQueryParams struct {
    Action PostUpdateServiceAccessPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateServiceAccessPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateServiceAccessPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateServiceAccessPoliciesRequest struct {
    QueryParams PostUpdateServiceAccessPoliciesQueryParams 
    Headers PostUpdateServiceAccessPoliciesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateServiceAccessPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

