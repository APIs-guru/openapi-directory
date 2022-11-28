import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeDataRepositoryTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeDataRepositoryTasksXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeDataRepositoryTasks = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks"
}


export class DescribeDataRepositoryTasksHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeDataRepositoryTasksXAmzTargetEnum;
}


export class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeDataRepositoryTasksQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeDataRepositoryTasksHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDataRepositoryTasksRequest;
}


export class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataRepositoryTaskNotFound?: any;

  @SpeakeasyMetadata()
  describeDataRepositoryTasksResponse?: shared.DescribeDataRepositoryTasksResponse;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
