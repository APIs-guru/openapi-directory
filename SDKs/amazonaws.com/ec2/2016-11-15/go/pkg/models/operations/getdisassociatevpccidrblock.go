package operations




type GetDisassociateVpcCidrBlockActionEnum string

const (
    GetDisassociateVpcCidrBlockActionEnumDisassociateVpcCidrBlock GetDisassociateVpcCidrBlockActionEnum = "DisassociateVpcCidrBlock"
)



type GetDisassociateVpcCidrBlockVersionEnum string

const (
    GetDisassociateVpcCidrBlockVersionEnumTwoThousandAndSixteen1115 GetDisassociateVpcCidrBlockVersionEnum = "2016-11-15"
)


type GetDisassociateVpcCidrBlockQueryParams struct {
    Action GetDisassociateVpcCidrBlockActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AssociationID string `queryParam:"style=form,explode=true,name=AssociationId"`
    Version GetDisassociateVpcCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateVpcCidrBlockHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateVpcCidrBlockRequest struct {
    QueryParams GetDisassociateVpcCidrBlockQueryParams 
    Headers GetDisassociateVpcCidrBlockHeaders 
    
}

type GetDisassociateVpcCidrBlockResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

