import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDataSourcePathParams extends SpeakeasyBase {
    apiId: string;
    name: string;
}
export declare class UpdateDataSourceHeaders extends SpeakeasyBase {
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
export declare class UpdateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
    awsRegion?: string;
    deltaSyncConfig?: shared.DeltaSyncConfig;
    tableName?: string;
    useCallerCredentials?: boolean;
    versioned?: boolean;
}
/**
 * Describes an Elasticsearch data source configuration.
**/
export declare class UpdateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes an HTTP data source configuration.
**/
export declare class UpdateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
    authorizationConfig?: shared.AuthorizationConfig;
    endpoint?: string;
}
/**
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export declare class UpdateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
    lambdaFunctionArn?: string;
}
/**
 * Describes a relational database data source configuration.
**/
export declare class UpdateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
    rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;
    relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}
export declare enum UpdateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE"
}
export declare class UpdateDataSourceRequestBody extends SpeakeasyBase {
    description?: string;
    dynamodbConfig?: UpdateDataSourceRequestBodyDynamodbConfig;
    elasticsearchConfig?: UpdateDataSourceRequestBodyElasticsearchConfig;
    httpConfig?: UpdateDataSourceRequestBodyHttpConfig;
    lambdaConfig?: UpdateDataSourceRequestBodyLambdaConfig;
    relationalDatabaseConfig?: UpdateDataSourceRequestBodyRelationalDatabaseConfig;
    serviceRoleArn?: string;
    type: UpdateDataSourceRequestBodyTypeEnum;
}
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    pathParams: UpdateDataSourcePathParams;
    headers: UpdateDataSourceHeaders;
    request: UpdateDataSourceRequestBody;
}
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateDataSourceResponse?: shared.UpdateDataSourceResponse;
}
