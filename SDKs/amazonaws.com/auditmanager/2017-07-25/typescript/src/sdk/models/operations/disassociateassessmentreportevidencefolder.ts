import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateAssessmentReportEvidenceFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class DisassociateAssessmentReportEvidenceFolderHeaders extends SpeakeasyBase {
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


export class DisassociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId: string;
}


export class DisassociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisassociateAssessmentReportEvidenceFolderPathParams;

  @SpeakeasyMetadata()
  headers: DisassociateAssessmentReportEvidenceFolderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DisassociateAssessmentReportEvidenceFolderRequestBody;
}


export class DisassociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disassociateAssessmentReportEvidenceFolderResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
