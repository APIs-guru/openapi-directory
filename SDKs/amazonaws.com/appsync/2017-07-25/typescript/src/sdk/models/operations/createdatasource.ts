import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDataSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateDataSourceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateDataSourceRequestBodyDynamodbConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class CreateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=deltaSyncConfig" })
  deltaSyncConfig?: shared.DeltaSyncConfig;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=useCallerCredentials" })
  useCallerCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versioned" })
  versioned?: boolean;
}


// CreateDataSourceRequestBodyElasticsearchConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class CreateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// CreateDataSourceRequestBodyHttpConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class CreateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: shared.AuthorizationConfig;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// CreateDataSourceRequestBodyLambdaConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class CreateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// CreateDataSourceRequestBodyRelationalDatabaseConfig
/** 
 * Describes a relational database data source configuration.
**/
export class CreateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}

export enum CreateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE"
}


export class CreateDataSourceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: CreateDataSourceRequestBodyDynamodbConfig;

  @SpeakeasyMetadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: CreateDataSourceRequestBodyElasticsearchConfig;

  @SpeakeasyMetadata({ data: "json, name=httpConfig" })
  httpConfig?: CreateDataSourceRequestBodyHttpConfig;

  @SpeakeasyMetadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: CreateDataSourceRequestBodyLambdaConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: CreateDataSourceRequestBodyRelationalDatabaseConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateDataSourceRequestBodyTypeEnum;
}


export class CreateDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDataSourcePathParams;

  @SpeakeasyMetadata()
  headers: CreateDataSourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDataSourceRequestBody;
}


export class CreateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDataSourceResponse?: shared.CreateDataSourceResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
