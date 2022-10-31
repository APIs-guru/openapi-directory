package operations

import (
"openapi/pkg/models/shared")

type ListAnalyzedResourcesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListAnalyzedResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type ListAnalyzedResourcesRequestBodyResourceTypeEnum string

const (
    ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsS3Bucket ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::S3::Bucket"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsIamRole ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::IAM::Role"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsSqsQueue ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::SQS::Queue"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsLambdaFunction ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::Lambda::Function"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsLambdaLayerVersion ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::Lambda::LayerVersion"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsKmsKey ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::KMS::Key"
ListAnalyzedResourcesRequestBodyResourceTypeEnumAwsSecretsManagerSecret ListAnalyzedResourcesRequestBodyResourceTypeEnum = "AWS::SecretsManager::Secret"
)


type ListAnalyzedResourcesRequestBody struct {
    AnalyzerArn string `json:"analyzerArn"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceType *ListAnalyzedResourcesRequestBodyResourceTypeEnum `json:"resourceType,omitempty"`
    
}

type ListAnalyzedResourcesRequest struct {
    QueryParams ListAnalyzedResourcesQueryParams 
    Headers ListAnalyzedResourcesHeaders 
    Request ListAnalyzedResourcesRequestBody `request:"mediaType=application/json"`
    
}

type ListAnalyzedResourcesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListAnalyzedResourcesResponse *shared.ListAnalyzedResourcesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

