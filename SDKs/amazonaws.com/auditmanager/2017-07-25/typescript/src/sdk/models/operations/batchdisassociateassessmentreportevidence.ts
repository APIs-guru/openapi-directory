import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchDisassociateAssessmentReportEvidencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class BatchDisassociateAssessmentReportEvidenceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class BatchDisassociateAssessmentReportEvidenceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceIds" })
  evidenceIds: string[];
}


export class BatchDisassociateAssessmentReportEvidenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchDisassociateAssessmentReportEvidencePathParams;

  @SpeakeasyMetadata()
  headers: BatchDisassociateAssessmentReportEvidenceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchDisassociateAssessmentReportEvidenceRequestBody;
}


export class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchDisassociateAssessmentReportEvidenceResponse?: shared.BatchDisassociateAssessmentReportEvidenceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
