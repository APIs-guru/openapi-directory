import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartFleetXAmzTargetEnum {
    PhotonAdminProxyServiceStartFleet = "PhotonAdminProxyService.StartFleet"
}


export class StartFleetHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartFleetXAmzTargetEnum;
}


export class StartFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartFleetRequest;
}


export class StartFleetResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidAccountStatusException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  requestLimitExceededException?: any;

  @Metadata()
  resourceNotAvailableException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startFleetResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
