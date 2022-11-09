import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateContainerInstancesStateXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateContainerInstancesState = "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"
}


export class UpdateContainerInstancesStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateContainerInstancesStateXAmzTargetEnum;
}


export class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateContainerInstancesStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateContainerInstancesStateRequest;
}


export class UpdateContainerInstancesStateResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateContainerInstancesStateResponse?: shared.UpdateContainerInstancesStateResponse;
}
