import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCertificateAuthorityAuditReportXAmzTargetEnum {
    AcmPrivateCaCreateCertificateAuthorityAuditReport = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
}


export class CreateCertificateAuthorityAuditReportHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateCertificateAuthorityAuditReportXAmzTargetEnum;
}


export class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCertificateAuthorityAuditReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCertificateAuthorityAuditReportRequest;
}


export class CreateCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCertificateAuthorityAuditReportResponse?: shared.CreateCertificateAuthorityAuditReportResponse;

  @Metadata()
  invalidArgsException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  requestInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
