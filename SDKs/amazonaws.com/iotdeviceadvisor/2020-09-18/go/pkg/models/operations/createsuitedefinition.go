package operations

import (
"openapi/pkg/models/shared")

type CreateSuiteDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration struct {
    DevicePermissionRoleArn *string `json:"devicePermissionRoleArn,omitempty"`
    Devices []shared.DeviceUnderTest `json:"devices,omitempty"`
    IntendedForQualification *bool `json:"intendedForQualification,omitempty"`
    RootGroup *string `json:"rootGroup,omitempty"`
    SuiteDefinitionName *string `json:"suiteDefinitionName,omitempty"`
    
}

type CreateSuiteDefinitionRequestBody struct {
    SuiteDefinitionConfiguration *CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateSuiteDefinitionRequest struct {
    Headers CreateSuiteDefinitionHeaders 
    Request CreateSuiteDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type CreateSuiteDefinitionResponse struct {
    ContentType string 
    CreateSuiteDefinitionResponse *shared.CreateSuiteDefinitionResponse 
    InternalServerException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

