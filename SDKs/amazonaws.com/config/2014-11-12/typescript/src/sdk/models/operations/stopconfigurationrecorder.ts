import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceStopConfigurationRecorder = "StarlingDoveService.StopConfigurationRecorder"
}


export class StopConfigurationRecorderHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopConfigurationRecorderXAmzTargetEnum;
}


export class StopConfigurationRecorderRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopConfigurationRecorderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopConfigurationRecorderRequest;
}


export class StopConfigurationRecorderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noSuchConfigurationRecorderException?: any;

  @Metadata()
  statusCode: number;
}
