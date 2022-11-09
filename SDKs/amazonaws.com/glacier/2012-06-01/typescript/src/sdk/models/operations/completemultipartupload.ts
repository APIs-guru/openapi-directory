import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompleteMultipartUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class CompleteMultipartUploadHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-archive-size" })
  xAmzArchiveSize?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-sha256-tree-hash" })
  xAmzSha256TreeHash?: string;
}


export class CompleteMultipartUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteMultipartUploadPathParams;

  @Metadata()
  headers: CompleteMultipartUploadHeaders;
}


export class CompleteMultipartUploadResponse extends SpeakeasyBase {
  @Metadata()
  archiveCreationOutput?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
