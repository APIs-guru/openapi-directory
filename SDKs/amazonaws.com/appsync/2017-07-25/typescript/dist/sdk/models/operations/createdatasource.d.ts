import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDataSourcePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Describes an Amazon DynamoDB data source configuration.
**/
export declare class CreateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
    awsRegion?: string;
    deltaSyncConfig?: shared.DeltaSyncConfig;
    tableName?: string;
    useCallerCredentials?: boolean;
    versioned?: boolean;
}
/**
 * Describes an Elasticsearch data source configuration.
**/
export declare class CreateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes an HTTP data source configuration.
**/
export declare class CreateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
    authorizationConfig?: shared.AuthorizationConfig;
    endpoint?: string;
}
/**
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export declare class CreateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
    lambdaFunctionArn?: string;
}
/**
 * Describes a relational database data source configuration.
**/
export declare class CreateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
    rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;
    relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}
export declare enum CreateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE"
}
export declare class CreateDataSourceRequestBody extends SpeakeasyBase {
    description?: string;
    dynamodbConfig?: CreateDataSourceRequestBodyDynamodbConfig;
    elasticsearchConfig?: CreateDataSourceRequestBodyElasticsearchConfig;
    httpConfig?: CreateDataSourceRequestBodyHttpConfig;
    lambdaConfig?: CreateDataSourceRequestBodyLambdaConfig;
    name: string;
    relationalDatabaseConfig?: CreateDataSourceRequestBodyRelationalDatabaseConfig;
    serviceRoleArn?: string;
    type: CreateDataSourceRequestBodyTypeEnum;
}
export declare class CreateDataSourceRequest extends SpeakeasyBase {
    pathParams: CreateDataSourcePathParams;
    headers: CreateDataSourceHeaders;
    request: CreateDataSourceRequestBody;
}
export declare class CreateDataSourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createDataSourceResponse?: shared.CreateDataSourceResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
