package operations




type PostDescribeTrunkInterfaceAssociationsActionEnum string

const (
    PostDescribeTrunkInterfaceAssociationsActionEnumDescribeTrunkInterfaceAssociations PostDescribeTrunkInterfaceAssociationsActionEnum = "DescribeTrunkInterfaceAssociations"
)



type PostDescribeTrunkInterfaceAssociationsVersionEnum string

const (
    PostDescribeTrunkInterfaceAssociationsVersionEnumTwoThousandAndSixteen1115 PostDescribeTrunkInterfaceAssociationsVersionEnum = "2016-11-15"
)


type PostDescribeTrunkInterfaceAssociationsQueryParams struct {
    Action PostDescribeTrunkInterfaceAssociationsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeTrunkInterfaceAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeTrunkInterfaceAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeTrunkInterfaceAssociationsRequest struct {
    QueryParams PostDescribeTrunkInterfaceAssociationsQueryParams 
    Headers PostDescribeTrunkInterfaceAssociationsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeTrunkInterfaceAssociationsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

