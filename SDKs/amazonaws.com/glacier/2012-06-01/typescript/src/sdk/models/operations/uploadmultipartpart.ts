import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadMultipartPartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class UploadMultipartPartHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-sha256-tree-hash" })
  xAmzSha256TreeHash?: string;
}


export class UploadMultipartPartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;
}


export class UploadMultipartPartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadMultipartPartPathParams;

  @Metadata()
  headers: UploadMultipartPartHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UploadMultipartPartRequestBody;
}


export class UploadMultipartPartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  requestTimeoutException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadMultipartPartOutput?: Map<string, any>;
}
