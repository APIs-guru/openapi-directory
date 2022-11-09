import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetectPhixAmzTargetEnum {
    ComprehendMedical20181030DetectPhi = "ComprehendMedical_20181030.DetectPHI"
}


export class DetectPhiHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetectPhixAmzTargetEnum;
}


export class DetectPhiRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetectPhiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetectPhiRequest;
}


export class DetectPhiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectPhiResponse?: shared.DetectPhiResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidEncodingException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  textSizeLimitExceededException?: any;

  @Metadata()
  tooManyRequestsException?: any;
}
