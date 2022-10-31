package operations




type PostRejectVpcPeeringConnectionActionEnum string

const (
    PostRejectVpcPeeringConnectionActionEnumRejectVpcPeeringConnection PostRejectVpcPeeringConnectionActionEnum = "RejectVpcPeeringConnection"
)



type PostRejectVpcPeeringConnectionVersionEnum string

const (
    PostRejectVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 PostRejectVpcPeeringConnectionVersionEnum = "2016-11-15"
)


type PostRejectVpcPeeringConnectionQueryParams struct {
    Action PostRejectVpcPeeringConnectionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRejectVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRejectVpcPeeringConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRejectVpcPeeringConnectionRequest struct {
    QueryParams PostRejectVpcPeeringConnectionQueryParams 
    Headers PostRejectVpcPeeringConnectionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRejectVpcPeeringConnectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

