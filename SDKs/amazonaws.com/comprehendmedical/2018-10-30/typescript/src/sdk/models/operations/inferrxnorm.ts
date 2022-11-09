import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum InferRxNormXAmzTargetEnum {
    ComprehendMedical20181030InferRxNorm = "ComprehendMedical_20181030.InferRxNorm"
}


export class InferRxNormHeaders extends SpeakeasyBase {
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
  xAmzTarget: InferRxNormXAmzTargetEnum;
}


export class InferRxNormRequest extends SpeakeasyBase {
  @Metadata()
  headers: InferRxNormHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InferRxNormRequest;
}


export class InferRxNormResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inferRxNormResponse?: shared.InferRxNormResponse;

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
