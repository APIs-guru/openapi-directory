package operations




type GetRestoreAddressToClassicActionEnum string

const (
    GetRestoreAddressToClassicActionEnumRestoreAddressToClassic GetRestoreAddressToClassicActionEnum = "RestoreAddressToClassic"
)



type GetRestoreAddressToClassicVersionEnum string

const (
    GetRestoreAddressToClassicVersionEnumTwoThousandAndSixteen1115 GetRestoreAddressToClassicVersionEnum = "2016-11-15"
)


type GetRestoreAddressToClassicQueryParams struct {
    Action GetRestoreAddressToClassicActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    PublicIP string `queryParam:"style=form,explode=true,name=PublicIp"`
    Version GetRestoreAddressToClassicVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRestoreAddressToClassicHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRestoreAddressToClassicRequest struct {
    QueryParams GetRestoreAddressToClassicQueryParams 
    Headers GetRestoreAddressToClassicHeaders 
    
}

type GetRestoreAddressToClassicResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

