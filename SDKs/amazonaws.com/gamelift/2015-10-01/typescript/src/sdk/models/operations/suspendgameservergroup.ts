import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SuspendGameServerGroupXAmzTargetEnum {
    GameLiftSuspendGameServerGroup = "GameLift.SuspendGameServerGroup"
}


export class SuspendGameServerGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: SuspendGameServerGroupXAmzTargetEnum;
}


export class SuspendGameServerGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: SuspendGameServerGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SuspendGameServerGroupInput;
}


export class SuspendGameServerGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  suspendGameServerGroupOutput?: shared.SuspendGameServerGroupOutput;

  @Metadata()
  unauthorizedException?: any;
}
