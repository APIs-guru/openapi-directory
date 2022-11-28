import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchEnableAlarmHeaders extends SpeakeasyBase {
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


export class BatchEnableAlarmRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableActionRequests", elemType: shared.EnableAlarmActionRequest })
  enableActionRequests: shared.EnableAlarmActionRequest[];
}


export class BatchEnableAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchEnableAlarmHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchEnableAlarmRequestBody;
}


export class BatchEnableAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchEnableAlarmResponse?: shared.BatchEnableAlarmResponse;

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
