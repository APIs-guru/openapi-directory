package operations



type UpdateFindingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateFindingsRequestBodyStatusEnum string

const (
    UpdateFindingsRequestBodyStatusEnumActive UpdateFindingsRequestBodyStatusEnum = "ACTIVE"
UpdateFindingsRequestBodyStatusEnumArchived UpdateFindingsRequestBodyStatusEnum = "ARCHIVED"
)


type UpdateFindingsRequestBody struct {
    AnalyzerArn string `json:"analyzerArn"`
    ClientToken *string `json:"clientToken,omitempty"`
    Ids []string `json:"ids,omitempty"`
    ResourceArn *string `json:"resourceArn,omitempty"`
    Status UpdateFindingsRequestBodyStatusEnum `json:"status"`
    
}

type UpdateFindingsRequest struct {
    Headers UpdateFindingsHeaders 
    Request UpdateFindingsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateFindingsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

