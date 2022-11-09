import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum InferIcd10CmxAmzTargetEnum {
    ComprehendMedical20181030InferIcd10Cm = "ComprehendMedical_20181030.InferICD10CM"
}


export class InferIcd10CmHeaders extends SpeakeasyBase {
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
  xAmzTarget: InferIcd10CmxAmzTargetEnum;
}


export class InferIcd10CmRequest extends SpeakeasyBase {
  @Metadata()
  headers: InferIcd10CmHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.InferIcd10CmRequest;
}


export class InferIcd10CmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inferIcd10CmResponse?: shared.InferIcd10CmResponse;

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
