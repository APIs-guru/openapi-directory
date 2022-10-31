package operations




type PostAssociateVpcCidrBlockActionEnum string

const (
    PostAssociateVpcCidrBlockActionEnumAssociateVpcCidrBlock PostAssociateVpcCidrBlockActionEnum = "AssociateVpcCidrBlock"
)



type PostAssociateVpcCidrBlockVersionEnum string

const (
    PostAssociateVpcCidrBlockVersionEnumTwoThousandAndSixteen1115 PostAssociateVpcCidrBlockVersionEnum = "2016-11-15"
)


type PostAssociateVpcCidrBlockQueryParams struct {
    Action PostAssociateVpcCidrBlockActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAssociateVpcCidrBlockVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAssociateVpcCidrBlockHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAssociateVpcCidrBlockRequest struct {
    QueryParams PostAssociateVpcCidrBlockQueryParams 
    Headers PostAssociateVpcCidrBlockHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAssociateVpcCidrBlockResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

