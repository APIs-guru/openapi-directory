import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartBgpFailoverTestXAmzTargetEnum {
    OvertureServiceStartBgpFailoverTest = "OvertureService.StartBgpFailoverTest"
}


export class StartBgpFailoverTestHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartBgpFailoverTestXAmzTargetEnum;
}


export class StartBgpFailoverTestRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartBgpFailoverTestHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartBgpFailoverTestRequest;
}


export class StartBgpFailoverTestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directConnectClientException?: any;

  @Metadata()
  directConnectServerException?: any;

  @Metadata()
  startBgpFailoverTestResponse?: shared.StartBgpFailoverTestResponse;

  @Metadata()
  statusCode: number;
}
