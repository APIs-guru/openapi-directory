import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitiateMultipartUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class InitiateMultipartUploadHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-archive-description" })
  xAmzArchiveDescription?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-part-size" })
  xAmzPartSize?: string;
}


export class InitiateMultipartUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InitiateMultipartUploadPathParams;

  @Metadata()
  headers: InitiateMultipartUploadHeaders;
}


export class InitiateMultipartUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  initiateMultipartUploadOutput?: Map<string, any>;

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
