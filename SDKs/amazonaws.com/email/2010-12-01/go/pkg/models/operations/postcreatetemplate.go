package operations




type PostCreateTemplateActionEnum string

const (
    PostCreateTemplateActionEnumCreateTemplate PostCreateTemplateActionEnum = "CreateTemplate"
)



type PostCreateTemplateVersionEnum string

const (
    PostCreateTemplateVersionEnumTwoThousandAndTen1201 PostCreateTemplateVersionEnum = "2010-12-01"
)


type PostCreateTemplateQueryParams struct {
    Action PostCreateTemplateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateTemplateRequest struct {
    QueryParams PostCreateTemplateQueryParams 
    Headers PostCreateTemplateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateTemplateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

