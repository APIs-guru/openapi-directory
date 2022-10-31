package operations




type GetDisassociateTrunkInterfaceActionEnum string

const (
    GetDisassociateTrunkInterfaceActionEnumDisassociateTrunkInterface GetDisassociateTrunkInterfaceActionEnum = "DisassociateTrunkInterface"
)



type GetDisassociateTrunkInterfaceVersionEnum string

const (
    GetDisassociateTrunkInterfaceVersionEnumTwoThousandAndSixteen1115 GetDisassociateTrunkInterfaceVersionEnum = "2016-11-15"
)


type GetDisassociateTrunkInterfaceQueryParams struct {
    Action GetDisassociateTrunkInterfaceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AssociationID string `queryParam:"style=form,explode=true,name=AssociationId"`
    ClientToken *string `queryParam:"style=form,explode=true,name=ClientToken"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDisassociateTrunkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisassociateTrunkInterfaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisassociateTrunkInterfaceRequest struct {
    QueryParams GetDisassociateTrunkInterfaceQueryParams 
    Headers GetDisassociateTrunkInterfaceHeaders 
    
}

type GetDisassociateTrunkInterfaceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

