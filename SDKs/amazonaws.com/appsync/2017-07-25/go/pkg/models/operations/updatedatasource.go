package operations

import (
"openapi/pkg/models/shared")

type UpdateDataSourcePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type UpdateDataSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDataSourceRequestBodyDynamodbConfig struct {
    AwsRegion *string `json:"awsRegion,omitempty"`
    DeltaSyncConfig *shared.DeltaSyncConfig `json:"deltaSyncConfig,omitempty"`
    TableName *string `json:"tableName,omitempty"`
    UseCallerCredentials *bool `json:"useCallerCredentials,omitempty"`
    Versioned *bool `json:"versioned,omitempty"`
    
}

type UpdateDataSourceRequestBodyElasticsearchConfig struct {
    AwsRegion *string `json:"awsRegion,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    
}

type UpdateDataSourceRequestBodyHTTPConfig struct {
    AuthorizationConfig *shared.AuthorizationConfig `json:"authorizationConfig,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    
}

type UpdateDataSourceRequestBodyLambdaConfig struct {
    LambdaFunctionArn *string `json:"lambdaFunctionArn,omitempty"`
    
}

type UpdateDataSourceRequestBodyRelationalDatabaseConfig struct {
    RdsHTTPEndpointConfig *shared.RdsHTTPEndpointConfig `json:"rdsHttpEndpointConfig,omitempty"`
    RelationalDatabaseSourceType *shared.RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType,omitempty"`
    
}


type UpdateDataSourceRequestBodyTypeEnum string

const (
    UpdateDataSourceRequestBodyTypeEnumAwsLambda UpdateDataSourceRequestBodyTypeEnum = "AWS_LAMBDA"
UpdateDataSourceRequestBodyTypeEnumAmazonDynamodb UpdateDataSourceRequestBodyTypeEnum = "AMAZON_DYNAMODB"
UpdateDataSourceRequestBodyTypeEnumAmazonElasticsearch UpdateDataSourceRequestBodyTypeEnum = "AMAZON_ELASTICSEARCH"
UpdateDataSourceRequestBodyTypeEnumNone UpdateDataSourceRequestBodyTypeEnum = "NONE"
UpdateDataSourceRequestBodyTypeEnumHTTP UpdateDataSourceRequestBodyTypeEnum = "HTTP"
UpdateDataSourceRequestBodyTypeEnumRelationalDatabase UpdateDataSourceRequestBodyTypeEnum = "RELATIONAL_DATABASE"
)


type UpdateDataSourceRequestBody struct {
    Description *string `json:"description,omitempty"`
    DynamodbConfig *UpdateDataSourceRequestBodyDynamodbConfig `json:"dynamodbConfig,omitempty"`
    ElasticsearchConfig *UpdateDataSourceRequestBodyElasticsearchConfig `json:"elasticsearchConfig,omitempty"`
    HTTPConfig *UpdateDataSourceRequestBodyHTTPConfig `json:"httpConfig,omitempty"`
    LambdaConfig *UpdateDataSourceRequestBodyLambdaConfig `json:"lambdaConfig,omitempty"`
    RelationalDatabaseConfig *UpdateDataSourceRequestBodyRelationalDatabaseConfig `json:"relationalDatabaseConfig,omitempty"`
    ServiceRoleArn *string `json:"serviceRoleArn,omitempty"`
    Type UpdateDataSourceRequestBodyTypeEnum `json:"type"`
    
}

type UpdateDataSourceRequest struct {
    PathParams UpdateDataSourcePathParams 
    Headers UpdateDataSourceHeaders 
    Request UpdateDataSourceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDataSourceResponse struct {
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateDataSourceResponse *shared.UpdateDataSourceResponse 
    
}

