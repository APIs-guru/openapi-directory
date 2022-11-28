import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDataSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class UpdateDataSourceHeaders extends SpeakeasyBase {
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


// UpdateDataSourceRequestBodyDynamodbConfig
/** 
 * Describes an Amazon DynamoDB data source configuration.
**/
export class UpdateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
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


// UpdateDataSourceRequestBodyElasticsearchConfig
/** 
 * Describes an Elasticsearch data source configuration.
**/
export class UpdateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// UpdateDataSourceRequestBodyHttpConfig
/** 
 * Describes an HTTP data source configuration.
**/
export class UpdateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationConfig" })
  authorizationConfig?: shared.AuthorizationConfig;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;
}


// UpdateDataSourceRequestBodyLambdaConfig
/** 
 * Describes an Amazon Web Services Lambda data source configuration.
**/
export class UpdateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lambdaFunctionArn" })
  lambdaFunctionArn?: string;
}


// UpdateDataSourceRequestBodyRelationalDatabaseConfig
/** 
 * Describes a relational database data source configuration.
**/
export class UpdateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rdsHttpEndpointConfig" })
  rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSourceType" })
  relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}

export enum UpdateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE"
}


export class UpdateDataSourceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: UpdateDataSourceRequestBodyDynamodbConfig;

  @SpeakeasyMetadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: UpdateDataSourceRequestBodyElasticsearchConfig;

  @SpeakeasyMetadata({ data: "json, name=httpConfig" })
  httpConfig?: UpdateDataSourceRequestBodyHttpConfig;

  @SpeakeasyMetadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: UpdateDataSourceRequestBodyLambdaConfig;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: UpdateDataSourceRequestBodyRelationalDatabaseConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UpdateDataSourceRequestBodyTypeEnum;
}


export class UpdateDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDataSourcePathParams;

  @SpeakeasyMetadata()
  headers: UpdateDataSourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDataSourceRequestBody;
}


export class UpdateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  updateDataSourceResponse?: shared.UpdateDataSourceResponse;
}
