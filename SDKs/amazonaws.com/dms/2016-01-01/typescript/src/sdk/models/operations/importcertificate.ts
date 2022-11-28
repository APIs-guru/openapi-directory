import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ImportCertificateXAmzTargetEnum {
    AmazonDmSv20160101ImportCertificate = "AmazonDMSv20160101.ImportCertificate"
}


export class ImportCertificateHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ImportCertificateXAmzTargetEnum;
}


export class ImportCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImportCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImportCertificateMessage;
}


export class ImportCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importCertificateResponse?: shared.ImportCertificateResponse;

  @SpeakeasyMetadata()
  invalidCertificateFault?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  resourceQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
