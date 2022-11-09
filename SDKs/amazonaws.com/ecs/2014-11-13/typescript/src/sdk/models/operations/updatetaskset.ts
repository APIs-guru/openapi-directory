import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"
}


export class UpdateTaskSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTaskSetXAmzTargetEnum;
}


export class UpdateTaskSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTaskSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTaskSetRequest;
}


export class UpdateTaskSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

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
  serviceNotActiveException?: any;

  @Metadata()
  serviceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskSetNotFoundException?: any;

  @Metadata()
  unsupportedFeatureException?: any;

  @Metadata()
  updateTaskSetResponse?: shared.UpdateTaskSetResponse;
}
