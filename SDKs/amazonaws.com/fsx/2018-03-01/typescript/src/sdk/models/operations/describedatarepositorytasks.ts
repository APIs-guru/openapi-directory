import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeDataRepositoryTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeDataRepositoryTasksXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DescribeDataRepositoryTasks = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks"
}


export class DescribeDataRepositoryTasksHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeDataRepositoryTasksXAmzTargetEnum;
}


export class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeDataRepositoryTasksQueryParams;

  @Metadata()
  headers: DescribeDataRepositoryTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDataRepositoryTasksRequest;
}


export class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dataRepositoryTaskNotFound?: any;

  @Metadata()
  describeDataRepositoryTasksResponse?: shared.DescribeDataRepositoryTasksResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
