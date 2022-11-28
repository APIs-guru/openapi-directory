import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartReplicationTaskXAmzTargetEnum {
    AmazonDmSv20160101StartReplicationTask = "AmazonDMSv20160101.StartReplicationTask"
}


export class StartReplicationTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartReplicationTaskXAmzTargetEnum;
}


export class StartReplicationTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartReplicationTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartReplicationTaskMessage;
}


export class StartReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  startReplicationTaskResponse?: shared.StartReplicationTaskResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
