import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopAssessmentRunXAmzTargetEnum {
    InspectorServiceStopAssessmentRun = "InspectorService.StopAssessmentRun"
}


export class StopAssessmentRunHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopAssessmentRunXAmzTargetEnum;
}


export class StopAssessmentRunRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopAssessmentRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopAssessmentRunRequest;
}


export class StopAssessmentRunResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  noSuchEntityException?: any;

  @Metadata()
  serviceTemporarilyUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
