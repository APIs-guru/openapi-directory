package operations




type PostDeleteCustomVerificationEmailTemplateActionEnum string

const (
    PostDeleteCustomVerificationEmailTemplateActionEnumDeleteCustomVerificationEmailTemplate PostDeleteCustomVerificationEmailTemplateActionEnum = "DeleteCustomVerificationEmailTemplate"
)



type PostDeleteCustomVerificationEmailTemplateVersionEnum string

const (
    PostDeleteCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 PostDeleteCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)


type PostDeleteCustomVerificationEmailTemplateQueryParams struct {
    Action PostDeleteCustomVerificationEmailTemplateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteCustomVerificationEmailTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteCustomVerificationEmailTemplateRequest struct {
    QueryParams PostDeleteCustomVerificationEmailTemplateQueryParams 
    Headers PostDeleteCustomVerificationEmailTemplateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteCustomVerificationEmailTemplateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

