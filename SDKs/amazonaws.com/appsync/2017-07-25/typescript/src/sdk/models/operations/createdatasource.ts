import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDataSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateDataSourceHeaders extends SpeakeasyBase {
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


// CreateDataSourceRequestBodyDynamodbConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class CreateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
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


// CreateDataSourceRequestBodyElasticsearchConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class CreateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// CreateDataSourceRequestBodyHttpConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class CreateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: shared.AuthorizationConfig;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// CreateDataSourceRequestBodyLambdaConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class CreateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// CreateDataSourceRequestBodyRelationalDatabaseConfig
/** 
 * Describes a relational database data source configuration.
**/
export class CreateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;

  @Metadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}

export enum CreateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA"
,    AmazonDynamodb = "AMAZON_DYNAMODB"
,    AmazonElasticsearch = "AMAZON_ELASTICSEARCH"
,    None = "NONE"
,    Http = "HTTP"
,    RelationalDatabase = "RELATIONAL_DATABASE"
}


export class CreateDataSourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: CreateDataSourceRequestBodyDynamodbConfig;

  @Metadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: CreateDataSourceRequestBodyElasticsearchConfig;

  @Metadata({ data: "json, name=httpConfig" })
  httpConfig?: CreateDataSourceRequestBodyHttpConfig;

  @Metadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: CreateDataSourceRequestBodyLambdaConfig;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: CreateDataSourceRequestBodyRelationalDatabaseConfig;

  @Metadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=type" })
  type: CreateDataSourceRequestBodyTypeEnum;
}


export class CreateDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDataSourcePathParams;

  @Metadata()
  headers: CreateDataSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDataSourceRequestBody;
}


export class CreateDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDataSourceResponse?: shared.CreateDataSourceResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
