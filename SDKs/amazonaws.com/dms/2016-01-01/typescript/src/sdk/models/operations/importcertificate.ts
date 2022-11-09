import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportCertificateXAmzTargetEnum {
    AmazonDmSv20160101ImportCertificate = "AmazonDMSv20160101.ImportCertificate"
}


export class ImportCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: ImportCertificateXAmzTargetEnum;
}


export class ImportCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportCertificateMessage;
}


export class ImportCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importCertificateResponse?: shared.ImportCertificateResponse;

  @Metadata()
  invalidCertificateFault?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  statusCode: number;
}
