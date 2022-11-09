import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchAcknowledgeAlarmHeaders extends SpeakeasyBase {
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
}


export class BatchAcknowledgeAlarmRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgeActionRequests", elemType: shared.AcknowledgeAlarmActionRequest })
  acknowledgeActionRequests: shared.AcknowledgeAlarmActionRequest[];
}


export class BatchAcknowledgeAlarmRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchAcknowledgeAlarmHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchAcknowledgeAlarmRequestBody;
}


export class BatchAcknowledgeAlarmResponse extends SpeakeasyBase {
  @Metadata()
  batchAcknowledgeAlarmResponse?: shared.BatchAcknowledgeAlarmResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
