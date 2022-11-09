import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDataSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateDataSourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateDataSourceRequestBodyDynamodbConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class UpdateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=deltaSyncConfig" })
  deltaSyncConfig?: shared.DeltaSyncConfig;

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;

  @Metadata({ data: "json, name=useCallerCredentials" })
  useCallerCredentials?: boolean;

  @Metadata({ data: "json, name=versioned" })
  versioned?: boolean;
}


// UpdateDataSourceRequestBodyElasticsearchConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class UpdateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// UpdateDataSourceRequestBodyHttpConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class UpdateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: shared.AuthorizationConfig;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// UpdateDataSourceRequestBodyLambdaConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class UpdateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// UpdateDataSourceRequestBodyRelationalDatabaseConfig
/** 
 * Describes a relational database data source configuration.
**/
export class UpdateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;

  @Metadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}

export enum UpdateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA"
,    AmazonDynamodb = "AMAZON_DYNAMODB"
,    AmazonElasticsearch = "AMAZON_ELASTICSEARCH"
,    None = "NONE"
,    Http = "HTTP"
,    RelationalDatabase = "RELATIONAL_DATABASE"
}


export class UpdateDataSourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: UpdateDataSourceRequestBodyDynamodbConfig;

  @Metadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: UpdateDataSourceRequestBodyElasticsearchConfig;

  @Metadata({ data: "json, name=httpConfig" })
  httpConfig?: UpdateDataSourceRequestBodyHttpConfig;

  @Metadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: UpdateDataSourceRequestBodyLambdaConfig;

  @Metadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: UpdateDataSourceRequestBodyRelationalDatabaseConfig;

  @Metadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=type" })
  type: UpdateDataSourceRequestBodyTypeEnum;
}


export class UpdateDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDataSourcePathParams;

  @Metadata()
  headers: UpdateDataSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDataSourceRequestBody;
}


export class UpdateDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateDataSourceResponse?: shared.UpdateDataSourceResponse;
}
