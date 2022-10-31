package operations




type GetAdvertiseByoipCidrActionEnum string

const (
    GetAdvertiseByoipCidrActionEnumAdvertiseByoipCidr GetAdvertiseByoipCidrActionEnum = "AdvertiseByoipCidr"
)



type GetAdvertiseByoipCidrVersionEnum string

const (
    GetAdvertiseByoipCidrVersionEnumTwoThousandAndSixteen1115 GetAdvertiseByoipCidrVersionEnum = "2016-11-15"
)


type GetAdvertiseByoipCidrQueryParams struct {
    Action GetAdvertiseByoipCidrActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Cidr string `queryParam:"style=form,explode=true,name=Cidr"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetAdvertiseByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAdvertiseByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAdvertiseByoipCidrRequest struct {
    QueryParams GetAdvertiseByoipCidrQueryParams 
    Headers GetAdvertiseByoipCidrHeaders 
    
}

type GetAdvertiseByoipCidrResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

