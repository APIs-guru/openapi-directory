package operations




type GetWithdrawByoipCidrActionEnum string

const (
    GetWithdrawByoipCidrActionEnumWithdrawByoipCidr GetWithdrawByoipCidrActionEnum = "WithdrawByoipCidr"
)



type GetWithdrawByoipCidrVersionEnum string

const (
    GetWithdrawByoipCidrVersionEnumTwoThousandAndSixteen1115 GetWithdrawByoipCidrVersionEnum = "2016-11-15"
)


type GetWithdrawByoipCidrQueryParams struct {
    Action GetWithdrawByoipCidrActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Cidr string `queryParam:"style=form,explode=true,name=Cidr"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetWithdrawByoipCidrVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetWithdrawByoipCidrHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetWithdrawByoipCidrRequest struct {
    QueryParams GetWithdrawByoipCidrQueryParams 
    Headers GetWithdrawByoipCidrHeaders 
    
}

type GetWithdrawByoipCidrResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

