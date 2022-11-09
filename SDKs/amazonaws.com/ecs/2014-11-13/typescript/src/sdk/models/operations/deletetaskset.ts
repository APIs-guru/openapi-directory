import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteTaskSet = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet"
}


export class DeleteTaskSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteTaskSetXAmzTargetEnum;
}


export class DeleteTaskSetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteTaskSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteTaskSetRequest;
}


export class DeleteTaskSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  clusterNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTaskSetResponse?: shared.DeleteTaskSetResponse;

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
}
