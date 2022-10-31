package operations




type GetResetImageAttributeActionEnum string

const (
    GetResetImageAttributeActionEnumResetImageAttribute GetResetImageAttributeActionEnum = "ResetImageAttribute"
)



type GetResetImageAttributeAttributeEnum string

const (
    GetResetImageAttributeAttributeEnumLaunchPermission GetResetImageAttributeAttributeEnum = "launchPermission"
)



type GetResetImageAttributeVersionEnum string

const (
    GetResetImageAttributeVersionEnumTwoThousandAndSixteen1115 GetResetImageAttributeVersionEnum = "2016-11-15"
)


type GetResetImageAttributeQueryParams struct {
    Action GetResetImageAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Attribute GetResetImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    ImageID string `queryParam:"style=form,explode=true,name=ImageId"`
    Version GetResetImageAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetResetImageAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResetImageAttributeRequest struct {
    QueryParams GetResetImageAttributeQueryParams 
    Headers GetResetImageAttributeHeaders 
    
}

type GetResetImageAttributeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

