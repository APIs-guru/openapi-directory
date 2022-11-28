import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AllocateConnectionOnInterconnectXAmzTargetEnum {
    OvertureServiceAllocateConnectionOnInterconnect = "OvertureService.AllocateConnectionOnInterconnect"
}


export class AllocateConnectionOnInterconnectHeaders extends SpeakeasyBase {
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
  xAmzTarget: AllocateConnectionOnInterconnectXAmzTargetEnum;
}


export class AllocateConnectionOnInterconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AllocateConnectionOnInterconnectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AllocateConnectionOnInterconnectRequest;
}


export class AllocateConnectionOnInterconnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: shared.Connection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
