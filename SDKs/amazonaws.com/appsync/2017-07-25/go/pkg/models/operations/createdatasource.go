package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourcePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateDataSourceRequestBodyDynamodbConfig struct {
	AwsRegion            *string                 `json:"awsRegion,omitempty"`
	DeltaSyncConfig      *shared.DeltaSyncConfig `json:"deltaSyncConfig,omitempty"`
	TableName            *string                 `json:"tableName,omitempty"`
	UseCallerCredentials *bool                   `json:"useCallerCredentials,omitempty"`
	Versioned            *bool                   `json:"versioned,omitempty"`
}

type CreateDataSourceRequestBodyElasticsearchConfig struct {
	AwsRegion *string `json:"awsRegion,omitempty"`
	Endpoint  *string `json:"endpoint,omitempty"`
}

type CreateDataSourceRequestBodyHTTPConfig struct {
	AuthorizationConfig *shared.AuthorizationConfig `json:"authorizationConfig,omitempty"`
	Endpoint            *string                     `json:"endpoint,omitempty"`
}

type CreateDataSourceRequestBodyLambdaConfig struct {
	LambdaFunctionArn *string `json:"lambdaFunctionArn,omitempty"`
}

type CreateDataSourceRequestBodyRelationalDatabaseConfig struct {
	RdsHTTPEndpointConfig        *shared.RdsHTTPEndpointConfig            `json:"rdsHttpEndpointConfig,omitempty"`
	RelationalDatabaseSourceType *shared.RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType,omitempty"`
}

type CreateDataSourceRequestBodyTypeEnum string

const (
	CreateDataSourceRequestBodyTypeEnumAwsLambda           CreateDataSourceRequestBodyTypeEnum = "AWS_LAMBDA"
	CreateDataSourceRequestBodyTypeEnumAmazonDynamodb      CreateDataSourceRequestBodyTypeEnum = "AMAZON_DYNAMODB"
	CreateDataSourceRequestBodyTypeEnumAmazonElasticsearch CreateDataSourceRequestBodyTypeEnum = "AMAZON_ELASTICSEARCH"
	CreateDataSourceRequestBodyTypeEnumNone                CreateDataSourceRequestBodyTypeEnum = "NONE"
	CreateDataSourceRequestBodyTypeEnumHTTP                CreateDataSourceRequestBodyTypeEnum = "HTTP"
	CreateDataSourceRequestBodyTypeEnumRelationalDatabase  CreateDataSourceRequestBodyTypeEnum = "RELATIONAL_DATABASE"
)

type CreateDataSourceRequestBody struct {
	Description              *string                                              `json:"description,omitempty"`
	DynamodbConfig           *CreateDataSourceRequestBodyDynamodbConfig           `json:"dynamodbConfig,omitempty"`
	ElasticsearchConfig      *CreateDataSourceRequestBodyElasticsearchConfig      `json:"elasticsearchConfig,omitempty"`
	HTTPConfig               *CreateDataSourceRequestBodyHTTPConfig               `json:"httpConfig,omitempty"`
	LambdaConfig             *CreateDataSourceRequestBodyLambdaConfig             `json:"lambdaConfig,omitempty"`
	Name                     string                                               `json:"name"`
	RelationalDatabaseConfig *CreateDataSourceRequestBodyRelationalDatabaseConfig `json:"relationalDatabaseConfig,omitempty"`
	ServiceRoleArn           *string                                              `json:"serviceRoleArn,omitempty"`
	Type                     CreateDataSourceRequestBodyTypeEnum                  `json:"type"`
}

type CreateDataSourceRequest struct {
	PathParams CreateDataSourcePathParams
	Headers    CreateDataSourceHeaders
	Request    CreateDataSourceRequestBody `request:"mediaType=application/json"`
}

type CreateDataSourceResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateDataSourceResponse        *shared.CreateDataSourceResponse
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
