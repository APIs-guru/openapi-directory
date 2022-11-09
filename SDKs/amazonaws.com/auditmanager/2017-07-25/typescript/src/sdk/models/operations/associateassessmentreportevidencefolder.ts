import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateAssessmentReportEvidenceFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class AssociateAssessmentReportEvidenceFolderHeaders extends SpeakeasyBase {
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


export class AssociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceFolderId" })
  evidenceFolderId: string;
}


export class AssociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AssociateAssessmentReportEvidenceFolderPathParams;

  @Metadata()
  headers: AssociateAssessmentReportEvidenceFolderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateAssessmentReportEvidenceFolderRequestBody;
}


export class AssociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  associateAssessmentReportEvidenceFolderResponse?: Map<string, any>;

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
