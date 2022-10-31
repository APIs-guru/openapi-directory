package operations




type GetDisableEbsEncryptionByDefaultActionEnum string

const (
    GetDisableEbsEncryptionByDefaultActionEnumDisableEbsEncryptionByDefault GetDisableEbsEncryptionByDefaultActionEnum = "DisableEbsEncryptionByDefault"
)



type GetDisableEbsEncryptionByDefaultVersionEnum string

const (
    GetDisableEbsEncryptionByDefaultVersionEnumTwoThousandAndSixteen1115 GetDisableEbsEncryptionByDefaultVersionEnum = "2016-11-15"
)


type GetDisableEbsEncryptionByDefaultQueryParams struct {
    Action GetDisableEbsEncryptionByDefaultActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Version GetDisableEbsEncryptionByDefaultVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisableEbsEncryptionByDefaultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisableEbsEncryptionByDefaultRequest struct {
    QueryParams GetDisableEbsEncryptionByDefaultQueryParams 
    Headers GetDisableEbsEncryptionByDefaultHeaders 
    
}

type GetDisableEbsEncryptionByDefaultResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

