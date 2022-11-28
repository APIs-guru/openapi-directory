import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeResourceCollectionHealthResourceCollectionTypeEnum {
    AwsCloudFormation = "AWS_CLOUD_FORMATION",
    AwsService = "AWS_SERVICE"
}


export class DescribeResourceCollectionHealthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceCollectionType" })
  resourceCollectionType: DescribeResourceCollectionHealthResourceCollectionTypeEnum;
}


export class DescribeResourceCollectionHealthQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class DescribeResourceCollectionHealthHeaders extends SpeakeasyBase {
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


export class DescribeResourceCollectionHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DescribeResourceCollectionHealthPathParams;

  @SpeakeasyMetadata()
  queryParams: DescribeResourceCollectionHealthQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeResourceCollectionHealthHeaders;
}


export class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeResourceCollectionHealthResponse?: shared.DescribeResourceCollectionHealthResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
