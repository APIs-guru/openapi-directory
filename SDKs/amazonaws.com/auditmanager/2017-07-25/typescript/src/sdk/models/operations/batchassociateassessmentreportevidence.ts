import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchAssociateAssessmentReportEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class BatchAssociateAssessmentReportEvidenceHeaders extends SpeakeasyBase {
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
}


export class BatchAssociateAssessmentReportEvidenceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId: string;

  @Metadata({ data: "json, name=evidenceIds" })
  evidenceIds: string[];
}


export class BatchAssociateAssessmentReportEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchAssociateAssessmentReportEvidencePathParams;

  @Metadata()
  headers: BatchAssociateAssessmentReportEvidenceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchAssociateAssessmentReportEvidenceRequestBody;
}


export class BatchAssociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchAssociateAssessmentReportEvidenceResponse?: shared.BatchAssociateAssessmentReportEvidenceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
