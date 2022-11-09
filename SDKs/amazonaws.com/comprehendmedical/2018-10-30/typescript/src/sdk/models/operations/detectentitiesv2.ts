import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetectEntitiesV2XAmzTargetEnum {
    ComprehendMedical20181030DetectEntitiesV2 = "ComprehendMedical_20181030.DetectEntitiesV2"
}


export class DetectEntitiesV2Headers extends SpeakeasyBase {
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
  xAmzTarget: DetectEntitiesV2XAmzTargetEnum;
}


export class DetectEntitiesV2Request extends SpeakeasyBase {
  @Metadata()
  headers: DetectEntitiesV2Headers;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetectEntitiesV2Request;
}


export class DetectEntitiesV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectEntitiesV2Response?: shared.DetectEntitiesV2Response;

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
