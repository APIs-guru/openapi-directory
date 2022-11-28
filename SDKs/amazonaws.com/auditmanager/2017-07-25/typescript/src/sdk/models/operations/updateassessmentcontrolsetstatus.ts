import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAssessmentControlSetStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlSetId" })
  controlSetId: string;
}


export class UpdateAssessmentControlSetStatusHeaders extends SpeakeasyBase {
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

export enum UpdateAssessmentControlSetStatusRequestBodyStatusEnum {
    Active = "ACTIVE",
    UnderReview = "UNDER_REVIEW",
    Reviewed = "REVIEWED"
}


export class UpdateAssessmentControlSetStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateAssessmentControlSetStatusRequestBodyStatusEnum;
}


export class UpdateAssessmentControlSetStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssessmentControlSetStatusPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAssessmentControlSetStatusHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentControlSetStatusRequestBody;
}


export class UpdateAssessmentControlSetStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateAssessmentControlSetStatusResponse?: shared.UpdateAssessmentControlSetStatusResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
