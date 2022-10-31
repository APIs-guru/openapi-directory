package operations




type GetGetCustomVerificationEmailTemplateActionEnum string

const (
    GetGetCustomVerificationEmailTemplateActionEnumGetCustomVerificationEmailTemplate GetGetCustomVerificationEmailTemplateActionEnum = "GetCustomVerificationEmailTemplate"
)



type GetGetCustomVerificationEmailTemplateVersionEnum string

const (
    GetGetCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 GetGetCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)


type GetGetCustomVerificationEmailTemplateQueryParams struct {
    Action GetGetCustomVerificationEmailTemplateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    TemplateName string `queryParam:"style=form,explode=true,name=TemplateName"`
    Version GetGetCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetCustomVerificationEmailTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetCustomVerificationEmailTemplateRequest struct {
    QueryParams GetGetCustomVerificationEmailTemplateQueryParams 
    Headers GetGetCustomVerificationEmailTemplateHeaders 
    
}

type GetGetCustomVerificationEmailTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

