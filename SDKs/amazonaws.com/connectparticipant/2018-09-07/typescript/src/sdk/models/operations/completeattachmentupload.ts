import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompleteAttachmentUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" })
  xAmzBearer: string;

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


export class CompleteAttachmentUploadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachmentIds" })
  attachmentIds: string[];

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;
}


export class CompleteAttachmentUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CompleteAttachmentUploadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CompleteAttachmentUploadRequestBody;
}


export class CompleteAttachmentUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  completeAttachmentUploadResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
