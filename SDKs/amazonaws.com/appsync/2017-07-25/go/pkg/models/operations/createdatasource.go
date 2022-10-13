package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourcePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDataSourceRequestBodyDynamodbConfig struct {
	AwsRegion            *string                 `json:"awsRegion"`
	DeltaSyncConfig      *shared.DeltaSyncConfig `json:"deltaSyncConfig"`
	TableName            *string                 `json:"tableName"`
	UseCallerCredentials *bool                   `json:"useCallerCredentials"`
	Versioned            *bool                   `json:"versioned"`
}

type CreateDataSourceRequestBodyElasticsearchConfig struct {
	AwsRegion *string `json:"awsRegion"`
	Endpoint  *string `json:"endpoint"`
}

type CreateDataSourceRequestBodyHTTPConfig struct {
	AuthorizationConfig *shared.AuthorizationConfig `json:"authorizationConfig"`
	Endpoint            *string                     `json:"endpoint"`
}

type CreateDataSourceRequestBodyLambdaConfig struct {
	LambdaFunctionArn *string `json:"lambdaFunctionArn"`
}

type CreateDataSourceRequestBodyRelationalDatabaseConfig struct {
	RdsHTTPEndpointConfig        *shared.RdsHTTPEndpointConfig            `json:"rdsHttpEndpointConfig"`
	RelationalDatabaseSourceType *shared.RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType"`
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
	Description              *string                                              `json:"description"`
	DynamodbConfig           *CreateDataSourceRequestBodyDynamodbConfig           `json:"dynamodbConfig"`
	ElasticsearchConfig      *CreateDataSourceRequestBodyElasticsearchConfig      `json:"elasticsearchConfig"`
	HTTPConfig               *CreateDataSourceRequestBodyHTTPConfig               `json:"httpConfig"`
	LambdaConfig             *CreateDataSourceRequestBodyLambdaConfig             `json:"lambdaConfig"`
	Name                     string                                               `json:"name"`
	RelationalDatabaseConfig *CreateDataSourceRequestBodyRelationalDatabaseConfig `json:"relationalDatabaseConfig"`
	ServiceRoleArn           *string                                              `json:"serviceRoleArn"`
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
