import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompleteAttachmentUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Bearer" })
  xAmzBearer: string;

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


export class CompleteAttachmentUploadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentIds" })
  attachmentIds: string[];

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;
}


export class CompleteAttachmentUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: CompleteAttachmentUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CompleteAttachmentUploadRequestBody;
}


export class CompleteAttachmentUploadResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  completeAttachmentUploadResponse?: Map<string, any>;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
