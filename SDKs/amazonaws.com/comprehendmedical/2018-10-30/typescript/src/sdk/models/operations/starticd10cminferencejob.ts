import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartIcd10CmInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartIcd10CmInferenceJob = "ComprehendMedical_20181030.StartICD10CMInferenceJob"
}


export class StartIcd10CmInferenceJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartIcd10CmInferenceJobXAmzTargetEnum;
}


export class StartIcd10CmInferenceJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartIcd10CmInferenceJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartIcd10CmInferenceJobRequest;
}


export class StartIcd10CmInferenceJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startIcd10CmInferenceJobResponse?: shared.StartIcd10CmInferenceJobResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
