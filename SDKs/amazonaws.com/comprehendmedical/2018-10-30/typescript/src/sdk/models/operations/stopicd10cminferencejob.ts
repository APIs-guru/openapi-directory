import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopIcd10CmInferenceJob = "ComprehendMedical_20181030.StopICD10CMInferenceJob"
}


export class StopIcd10CmInferenceJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopIcd10CmInferenceJobXAmzTargetEnum;
}


export class StopIcd10CmInferenceJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopIcd10CmInferenceJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopIcd10CmInferenceJobRequest;
}


export class StopIcd10CmInferenceJobResponse extends SpeakeasyBase {
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
  stopIcd10CmInferenceJobResponse?: shared.StopIcd10CmInferenceJobResponse;
}
