import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchImportEvidenceToAssessmentControlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" })
  controlSetId: string;
}


export class BatchImportEvidenceToAssessmentControlHeaders extends SpeakeasyBase {
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


export class BatchImportEvidenceToAssessmentControlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manualEvidence", elemType: shared.ManualEvidence })
  manualEvidence: shared.ManualEvidence[];
}


export class BatchImportEvidenceToAssessmentControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchImportEvidenceToAssessmentControlPathParams;

  @SpeakeasyMetadata()
  headers: BatchImportEvidenceToAssessmentControlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchImportEvidenceToAssessmentControlRequestBody;
}


export class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  batchImportEvidenceToAssessmentControlResponse?: shared.BatchImportEvidenceToAssessmentControlResponse;

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
