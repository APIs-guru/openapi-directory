import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDisableAlarmHeaders extends SpeakeasyBase {
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


export class BatchDisableAlarmRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableActionRequests", elemType: shared.DisableAlarmActionRequest })
  disableActionRequests: shared.DisableAlarmActionRequest[];
}


export class BatchDisableAlarmRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDisableAlarmHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDisableAlarmRequestBody;
}


export class BatchDisableAlarmResponse extends SpeakeasyBase {
  @Metadata()
  batchDisableAlarmResponse?: shared.BatchDisableAlarmResponse;

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
