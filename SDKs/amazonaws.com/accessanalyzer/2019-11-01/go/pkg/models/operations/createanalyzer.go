package operations

import (
"openapi/pkg/models/shared")

type CreateAnalyzerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateAnalyzerRequestBodyTypeEnum string

const (
    CreateAnalyzerRequestBodyTypeEnumAccount CreateAnalyzerRequestBodyTypeEnum = "ACCOUNT"
CreateAnalyzerRequestBodyTypeEnumOrganization CreateAnalyzerRequestBodyTypeEnum = "ORGANIZATION"
)


type CreateAnalyzerRequestBody struct {
    AnalyzerName string `json:"analyzerName"`
    ArchiveRules []shared.InlineArchiveRule `json:"archiveRules,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type CreateAnalyzerRequestBodyTypeEnum `json:"type"`
    
}

type CreateAnalyzerRequest struct {
    Headers CreateAnalyzerHeaders 
    Request CreateAnalyzerRequestBody `request:"mediaType=application/json"`
    
}

type CreateAnalyzerResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateAnalyzerResponse *shared.CreateAnalyzerResponse 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

