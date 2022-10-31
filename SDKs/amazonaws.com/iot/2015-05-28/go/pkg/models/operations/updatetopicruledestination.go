package operations



type UpdateTopicRuleDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateTopicRuleDestinationRequestBodyStatusEnum string

const (
    UpdateTopicRuleDestinationRequestBodyStatusEnumEnabled UpdateTopicRuleDestinationRequestBodyStatusEnum = "ENABLED"
UpdateTopicRuleDestinationRequestBodyStatusEnumInProgress UpdateTopicRuleDestinationRequestBodyStatusEnum = "IN_PROGRESS"
UpdateTopicRuleDestinationRequestBodyStatusEnumDisabled UpdateTopicRuleDestinationRequestBodyStatusEnum = "DISABLED"
UpdateTopicRuleDestinationRequestBodyStatusEnumError UpdateTopicRuleDestinationRequestBodyStatusEnum = "ERROR"
UpdateTopicRuleDestinationRequestBodyStatusEnumDeleting UpdateTopicRuleDestinationRequestBodyStatusEnum = "DELETING"
)


type UpdateTopicRuleDestinationRequestBody struct {
    Arn string `json:"arn"`
    Status UpdateTopicRuleDestinationRequestBodyStatusEnum `json:"status"`
    
}

type UpdateTopicRuleDestinationRequest struct {
    Headers UpdateTopicRuleDestinationHeaders 
    Request UpdateTopicRuleDestinationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateTopicRuleDestinationResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateTopicRuleDestinationResponse map[string]interface{} 
    
}

