package operations




type GetDescribeLifecycleHookTypesActionEnum string

const (
    GetDescribeLifecycleHookTypesActionEnumDescribeLifecycleHookTypes GetDescribeLifecycleHookTypesActionEnum = "DescribeLifecycleHookTypes"
)



type GetDescribeLifecycleHookTypesVersionEnum string

const (
    GetDescribeLifecycleHookTypesVersionEnumTwoThousandAndEleven0101 GetDescribeLifecycleHookTypesVersionEnum = "2011-01-01"
)


type GetDescribeLifecycleHookTypesQueryParams struct {
    Action GetDescribeLifecycleHookTypesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetDescribeLifecycleHookTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeLifecycleHookTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeLifecycleHookTypesRequest struct {
    QueryParams GetDescribeLifecycleHookTypesQueryParams 
    Headers GetDescribeLifecycleHookTypesHeaders 
    
}

type GetDescribeLifecycleHookTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

