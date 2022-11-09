import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeResourceCollectionHealthResourceCollectionTypeEnum {
    AwsCloudFormation = "AWS_CLOUD_FORMATION"
,    AwsService = "AWS_SERVICE"
}


export class DescribeResourceCollectionHealthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceCollectionType" })
  resourceCollectionType: DescribeResourceCollectionHealthResourceCollectionTypeEnum;
}


export class DescribeResourceCollectionHealthQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class DescribeResourceCollectionHealthHeaders extends SpeakeasyBase {
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


export class DescribeResourceCollectionHealthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeResourceCollectionHealthPathParams;

  @Metadata()
  queryParams: DescribeResourceCollectionHealthQueryParams;

  @Metadata()
  headers: DescribeResourceCollectionHealthHeaders;
}


export class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeResourceCollectionHealthResponse?: shared.DescribeResourceCollectionHealthResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
