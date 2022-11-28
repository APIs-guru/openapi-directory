import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StopBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStopBgpFailoverTest = "OvertureService.StopBgpFailoverTest"
}


export class StopBgpFailoverTestHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StopBgpFailoverTestXAmzTargetEnum;
}


export class StopBgpFailoverTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopBgpFailoverTestHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StopBgpFailoverTestRequest;
}


export class StopBgpFailoverTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopBgpFailoverTestResponse?: shared.StopBgpFailoverTestResponse;
}
