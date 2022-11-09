import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListContainerInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListContainerInstancesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ListContainerInstances = "AmazonEC2ContainerServiceV20141113.ListContainerInstances"
}


export class ListContainerInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListContainerInstancesXAmzTargetEnum;
}


export class ListContainerInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListContainerInstancesQueryParams;

  @Metadata()
  headers: ListContainerInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListContainerInstancesRequest;
}


export class ListContainerInstancesResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listContainerInstancesResponse?: shared.ListContainerInstancesResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
