import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchImportEvidenceToAssessmentControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" })
  controlSetId: string;
}


export class BatchImportEvidenceToAssessmentControlHeaders extends SpeakeasyBase {
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


export class BatchImportEvidenceToAssessmentControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=manualEvidence", elemType: shared.ManualEvidence })
  manualEvidence: shared.ManualEvidence[];
}


export class BatchImportEvidenceToAssessmentControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchImportEvidenceToAssessmentControlPathParams;

  @Metadata()
  headers: BatchImportEvidenceToAssessmentControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchImportEvidenceToAssessmentControlRequestBody;
}


export class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  batchImportEvidenceToAssessmentControlResponse?: shared.BatchImportEvidenceToAssessmentControlResponse;

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
