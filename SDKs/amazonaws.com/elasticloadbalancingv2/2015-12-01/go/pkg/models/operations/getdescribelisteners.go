package operations




type GetDescribeListenersActionEnum string

const (
    GetDescribeListenersActionEnumDescribeListeners GetDescribeListenersActionEnum = "DescribeListeners"
)



type GetDescribeListenersVersionEnum string

const (
    GetDescribeListenersVersionEnumTwoThousandAndFifteen1201 GetDescribeListenersVersionEnum = "2015-12-01"
)


type GetDescribeListenersQueryParams struct {
    Action GetDescribeListenersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ListenerArns []string `queryParam:"style=form,explode=true,name=ListenerArns"`
    LoadBalancerArn *string `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Version GetDescribeListenersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeListenersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeListenersRequest struct {
    QueryParams GetDescribeListenersQueryParams 
    Headers GetDescribeListenersHeaders 
    
}

type GetDescribeListenersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

