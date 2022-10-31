package operations




type GetRejectVpcPeeringConnectionActionEnum string

const (
    GetRejectVpcPeeringConnectionActionEnumRejectVpcPeeringConnection GetRejectVpcPeeringConnectionActionEnum = "RejectVpcPeeringConnection"
)



type GetRejectVpcPeeringConnectionVersionEnum string

const (
    GetRejectVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 GetRejectVpcPeeringConnectionVersionEnum = "2016-11-15"
)


type GetRejectVpcPeeringConnectionQueryParams struct {
    Action GetRejectVpcPeeringConnectionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetRejectVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcPeeringConnectionID string `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
    
}

type GetRejectVpcPeeringConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRejectVpcPeeringConnectionRequest struct {
    QueryParams GetRejectVpcPeeringConnectionQueryParams 
    Headers GetRejectVpcPeeringConnectionHeaders 
    
}

type GetRejectVpcPeeringConnectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

