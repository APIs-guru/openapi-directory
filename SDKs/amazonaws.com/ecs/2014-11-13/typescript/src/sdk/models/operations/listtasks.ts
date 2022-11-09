import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTasksXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListTasks = "AmazonEC2ContainerServiceV20141113.ListTasks"
}


export class ListTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTasksXAmzTargetEnum;
}


export class ListTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTasksQueryParams;

  @Metadata()
  headers: ListTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTasksRequest;
}


export class ListTasksResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listTasksResponse?: shared.ListTasksResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  serviceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
