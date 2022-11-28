import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAnalyzedResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListAnalyzedResourcesHeaders extends SpeakeasyBase {
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

export enum ListAnalyzedResourcesRequestBodyResourceTypeEnum {
    AwsS3Bucket = "AWS::S3::Bucket",
    AwsIamRole = "AWS::IAM::Role",
    AwsSqsQueue = "AWS::SQS::Queue",
    AwsLambdaFunction = "AWS::Lambda::Function",
    AwsLambdaLayerVersion = "AWS::Lambda::LayerVersion",
    AwsKmsKey = "AWS::KMS::Key",
    AwsSecretsManagerSecret = "AWS::SecretsManager::Secret"
}


export class ListAnalyzedResourcesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzerArn" })
  analyzerArn: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ListAnalyzedResourcesRequestBodyResourceTypeEnum;
}


export class ListAnalyzedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAnalyzedResourcesQueryParams;

  @SpeakeasyMetadata()
  headers: ListAnalyzedResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListAnalyzedResourcesRequestBody;
}


export class ListAnalyzedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listAnalyzedResourcesResponse?: shared.ListAnalyzedResourcesResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
