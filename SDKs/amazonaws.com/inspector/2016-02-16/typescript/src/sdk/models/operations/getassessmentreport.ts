import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAssessmentReportXAmzTargetEnum {
    InspectorServiceGetAssessmentReport = "InspectorService.GetAssessmentReport"
}


export class GetAssessmentReportHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAssessmentReportXAmzTargetEnum;
}


export class GetAssessmentReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAssessmentReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAssessmentReportRequest;
}


export class GetAssessmentReportResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  assessmentRunInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getAssessmentReportResponse?: shared.GetAssessmentReportResponse;

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

  @Metadata()
  unsupportedFeatureException?: any;
}
