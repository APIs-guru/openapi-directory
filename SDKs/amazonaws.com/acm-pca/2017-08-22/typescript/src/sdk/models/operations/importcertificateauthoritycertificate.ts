import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportCertificateAuthorityCertificateXAmzTargetEnum {
    AcmPrivateCaImportCertificateAuthorityCertificate = "ACMPrivateCA.ImportCertificateAuthorityCertificate"
}


export class ImportCertificateAuthorityCertificateHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ImportCertificateAuthorityCertificateXAmzTargetEnum;
}


export class ImportCertificateAuthorityCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportCertificateAuthorityCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportCertificateAuthorityCertificateRequest;
}


export class ImportCertificateAuthorityCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateMismatchException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  malformedCertificateException?: any;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  requestInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
