package operations




type GetDeleteVpcPeeringConnectionActionEnum string

const (
    GetDeleteVpcPeeringConnectionActionEnumDeleteVpcPeeringConnection GetDeleteVpcPeeringConnectionActionEnum = "DeleteVpcPeeringConnection"
)



type GetDeleteVpcPeeringConnectionVersionEnum string

const (
    GetDeleteVpcPeeringConnectionVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcPeeringConnectionVersionEnum = "2016-11-15"
)


type GetDeleteVpcPeeringConnectionQueryParams struct {
    Action GetDeleteVpcPeeringConnectionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDeleteVpcPeeringConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VpcPeeringConnectionID string `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
    
}

type GetDeleteVpcPeeringConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteVpcPeeringConnectionRequest struct {
    QueryParams GetDeleteVpcPeeringConnectionQueryParams 
    Headers GetDeleteVpcPeeringConnectionHeaders 
    
}

type GetDeleteVpcPeeringConnectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

