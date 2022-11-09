import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssessmentControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" })
  controlSetId: string;
}


export class UpdateAssessmentControlHeaders extends SpeakeasyBase {
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

export enum UpdateAssessmentControlRequestBodyControlStatusEnum {
    UnderReview = "UNDER_REVIEW"
,    Reviewed = "REVIEWED"
,    Inactive = "INACTIVE"
}


export class UpdateAssessmentControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @Metadata({ data: "json, name=controlStatus" })
  controlStatus?: UpdateAssessmentControlRequestBodyControlStatusEnum;
}


export class UpdateAssessmentControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssessmentControlPathParams;

  @Metadata()
  headers: UpdateAssessmentControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentControlRequestBody;
}


export class UpdateAssessmentControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAssessmentControlResponse?: shared.UpdateAssessmentControlResponse;

  @Metadata()
  validationException?: any;
}
