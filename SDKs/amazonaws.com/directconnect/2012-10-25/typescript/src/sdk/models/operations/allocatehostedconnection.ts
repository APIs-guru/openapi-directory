import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AllocateHostedConnectionXAmzTargetEnum {
    OvertureServiceAllocateHostedConnection = "OvertureService.AllocateHostedConnection"
}


export class AllocateHostedConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: AllocateHostedConnectionXAmzTargetEnum;
}


export class AllocateHostedConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AllocateHostedConnectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AllocateHostedConnectionRequest;
}


export class AllocateHostedConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connection?: shared.Connection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directConnectClientException?: any;

  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  duplicateTagKeysException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyTagsException?: any;
}
