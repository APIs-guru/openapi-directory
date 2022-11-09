import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RevokeCertificateXAmzTargetEnum {
    AcmPrivateCaRevokeCertificate = "ACMPrivateCA.RevokeCertificate"
}


export class RevokeCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: RevokeCertificateXAmzTargetEnum;
}


export class RevokeCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: RevokeCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RevokeCertificateRequest;
}


export class RevokeCertificateResponse extends SpeakeasyBase {
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
  limitExceededException?: any;

  @Metadata()
  requestAlreadyProcessedException?: any;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  requestInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
