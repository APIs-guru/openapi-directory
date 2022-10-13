package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataSourcePathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
	Name  string `pathParam:"style=simple,explode=false,name=name"`
}

type UpdateDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDataSourceRequestBodyDynamodbConfig struct {
	AwsRegion            *string                 `json:"awsRegion"`
	DeltaSyncConfig      *shared.DeltaSyncConfig `json:"deltaSyncConfig"`
	TableName            *string                 `json:"tableName"`
	UseCallerCredentials *bool                   `json:"useCallerCredentials"`
	Versioned            *bool                   `json:"versioned"`
}

type UpdateDataSourceRequestBodyElasticsearchConfig struct {
	AwsRegion *string `json:"awsRegion"`
	Endpoint  *string `json:"endpoint"`
}

type UpdateDataSourceRequestBodyHTTPConfig struct {
	AuthorizationConfig *shared.AuthorizationConfig `json:"authorizationConfig"`
	Endpoint            *string                     `json:"endpoint"`
}

type UpdateDataSourceRequestBodyLambdaConfig struct {
	LambdaFunctionArn *string `json:"lambdaFunctionArn"`
}

type UpdateDataSourceRequestBodyRelationalDatabaseConfig struct {
	RdsHTTPEndpointConfig        *shared.RdsHTTPEndpointConfig            `json:"rdsHttpEndpointConfig"`
	RelationalDatabaseSourceType *shared.RelationalDatabaseSourceTypeEnum `json:"relationalDatabaseSourceType"`
}

type UpdateDataSourceRequestBodyTypeEnum string

const (
	UpdateDataSourceRequestBodyTypeEnumAwsLambda           UpdateDataSourceRequestBodyTypeEnum = "AWS_LAMBDA"
	UpdateDataSourceRequestBodyTypeEnumAmazonDynamodb      UpdateDataSourceRequestBodyTypeEnum = "AMAZON_DYNAMODB"
	UpdateDataSourceRequestBodyTypeEnumAmazonElasticsearch UpdateDataSourceRequestBodyTypeEnum = "AMAZON_ELASTICSEARCH"
	UpdateDataSourceRequestBodyTypeEnumNone                UpdateDataSourceRequestBodyTypeEnum = "NONE"
	UpdateDataSourceRequestBodyTypeEnumHTTP                UpdateDataSourceRequestBodyTypeEnum = "HTTP"
	UpdateDataSourceRequestBodyTypeEnumRelationalDatabase  UpdateDataSourceRequestBodyTypeEnum = "RELATIONAL_DATABASE"
)

type UpdateDataSourceRequestBody struct {
	Description              *string                                              `json:"description"`
	DynamodbConfig           *UpdateDataSourceRequestBodyDynamodbConfig           `json:"dynamodbConfig"`
	ElasticsearchConfig      *UpdateDataSourceRequestBodyElasticsearchConfig      `json:"elasticsearchConfig"`
	HTTPConfig               *UpdateDataSourceRequestBodyHTTPConfig               `json:"httpConfig"`
	LambdaConfig             *UpdateDataSourceRequestBodyLambdaConfig             `json:"lambdaConfig"`
	RelationalDatabaseConfig *UpdateDataSourceRequestBodyRelationalDatabaseConfig `json:"relationalDatabaseConfig"`
	ServiceRoleArn           *string                                              `json:"serviceRoleArn"`
	Type                     UpdateDataSourceRequestBodyTypeEnum                  `json:"type"`
}

type UpdateDataSourceRequest struct {
	PathParams UpdateDataSourcePathParams
	Headers    UpdateDataSourceHeaders
	Request    UpdateDataSourceRequestBody `request:"mediaType=application/json"`
}

type UpdateDataSourceResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
	UpdateDataSourceResponse        *shared.UpdateDataSourceResponse
}
