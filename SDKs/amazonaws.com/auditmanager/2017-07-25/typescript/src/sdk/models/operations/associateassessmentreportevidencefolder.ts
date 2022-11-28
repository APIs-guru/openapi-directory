import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateAssessmentReportEvidenceFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class AssociateAssessmentReportEvidenceFolderHeaders extends SpeakeasyBase {
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


export class AssociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId: string;
}


export class AssociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssociateAssessmentReportEvidenceFolderPathParams;

  @SpeakeasyMetadata()
  headers: AssociateAssessmentReportEvidenceFolderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateAssessmentReportEvidenceFolderRequestBody;
}


export class AssociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  associateAssessmentReportEvidenceFolderResponse?: Map<string, any>;

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
