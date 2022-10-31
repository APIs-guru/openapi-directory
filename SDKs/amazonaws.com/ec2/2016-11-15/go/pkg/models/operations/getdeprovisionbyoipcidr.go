package operations




type GetDeprovisionByoipCidrActionEnum string

const (
    GetDeprovisionByoipCidrActionEnumDeprovisionByoipCidr GetDeprovisionByoipCidrActionEnum = "DeprovisionByoipCidr"
)



type GetDeprovisionByoipCidrVersionEnum string

const (
    GetDeprovisionByoipCidrVersionEnumTwoThousandAndSixteen1115 GetDeprovisionByoipCidrVersionEnum = "2016-11-15"
)


type GetDeprovisionByoipCidrQueryParams struct {
    Action GetDeprovisionByoipCidrActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Cidr string `queryParam:"style=form,explode=true,name=Cidr"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDeprovisionByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeprovisionByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeprovisionByoipCidrRequest struct {
    QueryParams GetDeprovisionByoipCidrQueryParams 
    Headers GetDeprovisionByoipCidrHeaders 
    
}

type GetDeprovisionByoipCidrResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

