import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartAttachmentUploadHeaders extends SpeakeasyBase {
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


export class StartAttachmentUploadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentName" })
  attachmentName: string;

  @Metadata({ data: "json, name=AttachmentSizeInBytes" })
  attachmentSizeInBytes: number;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=ContentType" })
  contentType: string;
}


export class StartAttachmentUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartAttachmentUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartAttachmentUploadRequestBody;
}


export class StartAttachmentUploadResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  startAttachmentUploadResponse?: shared.StartAttachmentUploadResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
