package operations




type GetCreateTemplateActionEnum string

const (
    GetCreateTemplateActionEnumCreateTemplate GetCreateTemplateActionEnum = "CreateTemplate"
)


type GetCreateTemplateTemplate struct {
    HTMLPart *string `queryParam:"name=HtmlPart"`
    SubjectPart *string `queryParam:"name=SubjectPart"`
    TemplateName string `queryParam:"name=TemplateName"`
    TextPart *string `queryParam:"name=TextPart"`
    
}


type GetCreateTemplateVersionEnum string

const (
    GetCreateTemplateVersionEnumTwoThousandAndTen1201 GetCreateTemplateVersionEnum = "2010-12-01"
)


type GetCreateTemplateQueryParams struct {
    Action GetCreateTemplateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Template GetCreateTemplateTemplate `queryParam:"style=form,explode=true,name=Template"`
    Version GetCreateTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateTemplateRequest struct {
    QueryParams GetCreateTemplateQueryParams 
    Headers GetCreateTemplateHeaders 
    
}

type GetCreateTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

