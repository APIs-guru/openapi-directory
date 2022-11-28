import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateQuantumTaskHeaders extends SpeakeasyBase {
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


export class CreateQuantumTaskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=deviceParameters" })
  deviceParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=outputS3Bucket" })
  outputS3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=outputS3KeyPrefix" })
  outputS3KeyPrefix: string;

  @SpeakeasyMetadata({ data: "json, name=shots" })
  shots: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateQuantumTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateQuantumTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateQuantumTaskRequestBody;
}


export class CreateQuantumTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createQuantumTaskResponse?: shared.CreateQuantumTaskResponse;

  @SpeakeasyMetadata()
  deviceOfflineException?: any;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
