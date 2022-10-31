package operations




type PostModifyVpcPeeringConnectionOptionsActionEnum string

const (
    PostModifyVpcPeeringConnectionOptionsActionEnumModifyVpcPeeringConnectionOptions PostModifyVpcPeeringConnectionOptionsActionEnum = "ModifyVpcPeeringConnectionOptions"
)



type PostModifyVpcPeeringConnectionOptionsVersionEnum string

const (
    PostModifyVpcPeeringConnectionOptionsVersionEnumTwoThousandAndSixteen1115 PostModifyVpcPeeringConnectionOptionsVersionEnum = "2016-11-15"
)


type PostModifyVpcPeeringConnectionOptionsQueryParams struct {
    Action PostModifyVpcPeeringConnectionOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyVpcPeeringConnectionOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyVpcPeeringConnectionOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyVpcPeeringConnectionOptionsRequest struct {
    QueryParams PostModifyVpcPeeringConnectionOptionsQueryParams 
    Headers PostModifyVpcPeeringConnectionOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyVpcPeeringConnectionOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

