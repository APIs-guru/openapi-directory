package operations




type GetDeleteRouteTableActionEnum string

const (
    GetDeleteRouteTableActionEnumDeleteRouteTable GetDeleteRouteTableActionEnum = "DeleteRouteTable"
)



type GetDeleteRouteTableVersionEnum string

const (
    GetDeleteRouteTableVersionEnumTwoThousandAndSixteen1115 GetDeleteRouteTableVersionEnum = "2016-11-15"
)


type GetDeleteRouteTableQueryParams struct {
    Action GetDeleteRouteTableActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    RouteTableID string `queryParam:"style=form,explode=true,name=RouteTableId"`
    Version GetDeleteRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteRouteTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteRouteTableRequest struct {
    QueryParams GetDeleteRouteTableQueryParams 
    Headers GetDeleteRouteTableHeaders 
    
}

type GetDeleteRouteTableResponse struct {
    ContentType string 
    StatusCode int64 
    
}

