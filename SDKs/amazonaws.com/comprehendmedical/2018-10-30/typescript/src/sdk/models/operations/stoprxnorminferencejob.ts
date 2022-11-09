import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopRxNormInferenceJob = "ComprehendMedical_20181030.StopRxNormInferenceJob"
}


export class StopRxNormInferenceJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopRxNormInferenceJobXAmzTargetEnum;
}


export class StopRxNormInferenceJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopRxNormInferenceJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopRxNormInferenceJobRequest;
}


export class StopRxNormInferenceJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopRxNormInferenceJobResponse?: shared.StopRxNormInferenceJobResponse;
}
