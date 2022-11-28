import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchSnoozeAlarmHeaders extends SpeakeasyBase {
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
}


export class BatchSnoozeAlarmRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snoozeActionRequests", elemType: shared.SnoozeAlarmActionRequest })
  snoozeActionRequests: shared.SnoozeAlarmActionRequest[];
}


export class BatchSnoozeAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchSnoozeAlarmHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchSnoozeAlarmRequestBody;
}


export class BatchSnoozeAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchSnoozeAlarmResponse?: shared.BatchSnoozeAlarmResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
