package operations

import (
"openapi/pkg/models/shared")

type CreateCustomMetricPathParams struct {
    MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
    
}

type CreateCustomMetricHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateCustomMetricRequestBodyMetricTypeEnum string

const (
    CreateCustomMetricRequestBodyMetricTypeEnumStringList CreateCustomMetricRequestBodyMetricTypeEnum = "string-list"
CreateCustomMetricRequestBodyMetricTypeEnumIPAddressList CreateCustomMetricRequestBodyMetricTypeEnum = "ip-address-list"
CreateCustomMetricRequestBodyMetricTypeEnumNumberList CreateCustomMetricRequestBodyMetricTypeEnum = "number-list"
CreateCustomMetricRequestBodyMetricTypeEnumNumber CreateCustomMetricRequestBodyMetricTypeEnum = "number"
)


type CreateCustomMetricRequestBody struct {
    ClientRequestToken string `json:"clientRequestToken"`
    DisplayName *string `json:"displayName,omitempty"`
    MetricType CreateCustomMetricRequestBodyMetricTypeEnum `json:"metricType"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateCustomMetricRequest struct {
    PathParams CreateCustomMetricPathParams 
    Headers CreateCustomMetricHeaders 
    Request CreateCustomMetricRequestBody `request:"mediaType=application/json"`
    
}

type CreateCustomMetricResponse struct {
    ContentType string 
    CreateCustomMetricResponse *shared.CreateCustomMetricResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

