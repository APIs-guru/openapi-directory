package operations

import (
"openapi/pkg/models/shared")

type StartBulkDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznClientToken *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
    
}

type StartBulkDeploymentRequestBody struct {
    ExecutionRoleArn string `json:"ExecutionRoleArn"`
    InputFileURI string `json:"InputFileUri"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type StartBulkDeploymentRequest struct {
    Headers StartBulkDeploymentHeaders 
    Request StartBulkDeploymentRequestBody `request:"mediaType=application/json"`
    
}

type StartBulkDeploymentResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    StartBulkDeploymentResponse *shared.StartBulkDeploymentResponse 
    StatusCode int64 
    
}

