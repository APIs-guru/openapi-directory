import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchDeleteConnectionXAmzTargetEnum {
    AwsGlueBatchDeleteConnection = "AWSGlue.BatchDeleteConnection"
}


export class BatchDeleteConnectionHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDeleteConnectionXAmzTargetEnum;
}


export class BatchDeleteConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchDeleteConnectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchDeleteConnectionRequest;
}


export class BatchDeleteConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchDeleteConnectionResponse?: shared.BatchDeleteConnectionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  operationTimeoutException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
