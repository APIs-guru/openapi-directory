package operations




type GetDeleteKeyPairActionEnum string

const (
    GetDeleteKeyPairActionEnumDeleteKeyPair GetDeleteKeyPairActionEnum = "DeleteKeyPair"
)



type GetDeleteKeyPairVersionEnum string

const (
    GetDeleteKeyPairVersionEnumTwoThousandAndSixteen1115 GetDeleteKeyPairVersionEnum = "2016-11-15"
)


type GetDeleteKeyPairQueryParams struct {
    Action GetDeleteKeyPairActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    KeyName *string `queryParam:"style=form,explode=true,name=KeyName"`
    KeyPairID *string `queryParam:"style=form,explode=true,name=KeyPairId"`
    Version GetDeleteKeyPairVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteKeyPairRequest struct {
    QueryParams GetDeleteKeyPairQueryParams 
    Headers GetDeleteKeyPairHeaders 
    
}

type GetDeleteKeyPairResponse struct {
    ContentType string 
    StatusCode int64 
    
}

