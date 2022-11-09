import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEvidenceFoldersByAssessmentControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" })
  controlSetId: string;
}


export class GetEvidenceFoldersByAssessmentControlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetEvidenceFoldersByAssessmentControlHeaders extends SpeakeasyBase {
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


export class GetEvidenceFoldersByAssessmentControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEvidenceFoldersByAssessmentControlPathParams;

  @Metadata()
  queryParams: GetEvidenceFoldersByAssessmentControlQueryParams;

  @Metadata()
  headers: GetEvidenceFoldersByAssessmentControlHeaders;
}


export class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getEvidenceFoldersByAssessmentControlResponse?: shared.GetEvidenceFoldersByAssessmentControlResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
