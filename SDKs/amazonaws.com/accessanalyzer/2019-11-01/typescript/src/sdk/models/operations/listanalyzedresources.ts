import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAnalyzedResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAnalyzedResourcesHeaders extends SpeakeasyBase {
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

export enum ListAnalyzedResourcesRequestBodyResourceTypeEnum {
    AwsS3Bucket = "AWS::S3::Bucket"
,    AwsIamRole = "AWS::IAM::Role"
,    AwsSqsQueue = "AWS::SQS::Queue"
,    AwsLambdaFunction = "AWS::Lambda::Function"
,    AwsLambdaLayerVersion = "AWS::Lambda::LayerVersion"
,    AwsKmsKey = "AWS::KMS::Key"
,    AwsSecretsManagerSecret = "AWS::SecretsManager::Secret"
}


export class ListAnalyzedResourcesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ListAnalyzedResourcesRequestBodyResourceTypeEnum;
}


export class ListAnalyzedResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAnalyzedResourcesQueryParams;

  @Metadata()
  headers: ListAnalyzedResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAnalyzedResourcesRequestBody;
}


export class ListAnalyzedResourcesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAnalyzedResourcesResponse?: shared.ListAnalyzedResourcesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
