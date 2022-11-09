import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateQuantumTaskHeaders extends SpeakeasyBase {
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


export class CreateQuantumTaskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @Metadata({ data: "json, name=deviceParameters" })
  deviceParameters?: string;

  @Metadata({ data: "json, name=outputS3Bucket" })
  outputS3Bucket: string;

  @Metadata({ data: "json, name=outputS3KeyPrefix" })
  outputS3KeyPrefix: string;

  @Metadata({ data: "json, name=shots" })
  shots: number;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateQuantumTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateQuantumTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateQuantumTaskRequestBody;
}


export class CreateQuantumTaskResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createQuantumTaskResponse?: shared.CreateQuantumTaskResponse;

  @Metadata()
  deviceOfflineException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
