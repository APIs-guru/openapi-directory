import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchAcknowledgeAlarmHeaders extends SpeakeasyBase {
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


export class BatchAcknowledgeAlarmRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgeActionRequests", elemType: shared.AcknowledgeAlarmActionRequest })
  acknowledgeActionRequests: shared.AcknowledgeAlarmActionRequest[];
}


export class BatchAcknowledgeAlarmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchAcknowledgeAlarmHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchAcknowledgeAlarmRequestBody;
}


export class BatchAcknowledgeAlarmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchAcknowledgeAlarmResponse?: shared.BatchAcknowledgeAlarmResponse;

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
