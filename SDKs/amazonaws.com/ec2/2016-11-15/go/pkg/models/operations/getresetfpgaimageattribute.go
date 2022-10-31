package operations




type GetResetFpgaImageAttributeActionEnum string

const (
    GetResetFpgaImageAttributeActionEnumResetFpgaImageAttribute GetResetFpgaImageAttributeActionEnum = "ResetFpgaImageAttribute"
)



type GetResetFpgaImageAttributeAttributeEnum string

const (
    GetResetFpgaImageAttributeAttributeEnumLoadPermission GetResetFpgaImageAttributeAttributeEnum = "loadPermission"
)



type GetResetFpgaImageAttributeVersionEnum string

const (
    GetResetFpgaImageAttributeVersionEnumTwoThousandAndSixteen1115 GetResetFpgaImageAttributeVersionEnum = "2016-11-15"
)


type GetResetFpgaImageAttributeQueryParams struct {
    Action GetResetFpgaImageAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute *GetResetFpgaImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    FpgaImageID string `queryParam:"style=form,explode=true,name=FpgaImageId"`
    Version GetResetFpgaImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetResetFpgaImageAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResetFpgaImageAttributeRequest struct {
    QueryParams GetResetFpgaImageAttributeQueryParams 
    Headers GetResetFpgaImageAttributeHeaders 
    
}

type GetResetFpgaImageAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

