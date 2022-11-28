import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchUpdateDetectorHeaders extends SpeakeasyBase {
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


export class BatchUpdateDetectorRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectors", elemType: shared.UpdateDetectorRequest })
  detectors: shared.UpdateDetectorRequest[];
}


export class BatchUpdateDetectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchUpdateDetectorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchUpdateDetectorRequestBody;
}


export class BatchUpdateDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchUpdateDetectorResponse?: shared.BatchUpdateDetectorResponse;

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
