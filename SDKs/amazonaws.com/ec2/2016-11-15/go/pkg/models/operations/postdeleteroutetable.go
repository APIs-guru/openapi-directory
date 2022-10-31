package operations




type PostDeleteRouteTableActionEnum string

const (
    PostDeleteRouteTableActionEnumDeleteRouteTable PostDeleteRouteTableActionEnum = "DeleteRouteTable"
)



type PostDeleteRouteTableVersionEnum string

const (
    PostDeleteRouteTableVersionEnumTwoThousandAndSixteen1115 PostDeleteRouteTableVersionEnum = "2016-11-15"
)


type PostDeleteRouteTableQueryParams struct {
    Action PostDeleteRouteTableActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteRouteTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteRouteTableRequest struct {
    QueryParams PostDeleteRouteTableQueryParams 
    Headers PostDeleteRouteTableHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteRouteTableResponse struct {
    ContentType string 
    StatusCode int64 
    
}

