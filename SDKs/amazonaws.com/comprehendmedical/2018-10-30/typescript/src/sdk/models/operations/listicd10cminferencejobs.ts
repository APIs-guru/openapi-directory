import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListIcd10CmInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListIcd10CmInferenceJobs = "ComprehendMedical_20181030.ListICD10CMInferenceJobs"
}


export class ListIcd10CmInferenceJobsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListIcd10CmInferenceJobsXAmzTargetEnum;
}


export class ListIcd10CmInferenceJobsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListIcd10CmInferenceJobsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListIcd10CmInferenceJobsRequest;
}


export class ListIcd10CmInferenceJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listIcd10CmInferenceJobsResponse?: shared.ListIcd10CmInferenceJobsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  validationException?: any;
}
