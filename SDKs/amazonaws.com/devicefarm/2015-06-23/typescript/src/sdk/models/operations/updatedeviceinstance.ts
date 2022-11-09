import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateDeviceInstanceXAmzTargetEnum {
    DeviceFarm20150623UpdateDeviceInstance = "DeviceFarm_20150623.UpdateDeviceInstance"
}


export class UpdateDeviceInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateDeviceInstanceXAmzTargetEnum;
}


export class UpdateDeviceInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateDeviceInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateDeviceInstanceRequest;
}


export class UpdateDeviceInstanceResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceInstanceResult?: shared.UpdateDeviceInstanceResult;
}
