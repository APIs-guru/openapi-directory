import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchResetAlarmHeaders extends SpeakeasyBase {
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


export class BatchResetAlarmRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resetActionRequests", elemType: shared.ResetAlarmActionRequest })
  resetActionRequests: shared.ResetAlarmActionRequest[];
}


export class BatchResetAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchResetAlarmHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchResetAlarmRequestBody;
}


export class BatchResetAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchResetAlarmResponse?: shared.BatchResetAlarmResponse;

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
