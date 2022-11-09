import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportCertificateXAmzTargetEnum {
    CertificateManagerExportCertificate = "CertificateManager.ExportCertificate"
}


export class ExportCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportCertificateXAmzTargetEnum;
}


export class ExportCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportCertificateRequest;
}


export class ExportCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportCertificateResponse?: shared.ExportCertificateResponse;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  requestInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
