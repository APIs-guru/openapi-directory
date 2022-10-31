package operations




type GetAssociateTrunkInterfaceActionEnum string

const (
    GetAssociateTrunkInterfaceActionEnumAssociateTrunkInterface GetAssociateTrunkInterfaceActionEnum = "AssociateTrunkInterface"
)



type GetAssociateTrunkInterfaceVersionEnum string

const (
    GetAssociateTrunkInterfaceVersionEnumTwoThousandAndSixteen1115 GetAssociateTrunkInterfaceVersionEnum = "2016-11-15"
)


type GetAssociateTrunkInterfaceQueryParams struct {
    Action GetAssociateTrunkInterfaceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    BranchInterfaceID string `queryParam:"style=form,explode=true,name=BranchInterfaceId"`
    ClientToken *string `queryParam:"style=form,explode=true,name=ClientToken"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    GreKey *int64 `queryParam:"style=form,explode=true,name=GreKey"`
    TrunkInterfaceID string `queryParam:"style=form,explode=true,name=TrunkInterfaceId"`
    Version GetAssociateTrunkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    VlanID *int64 `queryParam:"style=form,explode=true,name=VlanId"`
    
}

type GetAssociateTrunkInterfaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssociateTrunkInterfaceRequest struct {
    QueryParams GetAssociateTrunkInterfaceQueryParams 
    Headers GetAssociateTrunkInterfaceHeaders 
    
}

type GetAssociateTrunkInterfaceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

