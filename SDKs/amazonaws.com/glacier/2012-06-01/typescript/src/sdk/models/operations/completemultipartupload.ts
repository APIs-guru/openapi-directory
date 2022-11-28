import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompleteMultipartUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class CompleteMultipartUploadHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-archive-size" })
  xAmzArchiveSize?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-sha256-tree-hash" })
  xAmzSha256TreeHash?: string;
}


export class CompleteMultipartUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteMultipartUploadPathParams;

  @SpeakeasyMetadata()
  headers: CompleteMultipartUploadHeaders;
}


export class CompleteMultipartUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  archiveCreationOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
