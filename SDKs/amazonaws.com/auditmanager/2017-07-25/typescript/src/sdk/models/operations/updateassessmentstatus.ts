import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAssessmentStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;
}


export class UpdateAssessmentStatusHeaders extends SpeakeasyBase {
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

export enum UpdateAssessmentStatusRequestBodyStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


export class UpdateAssessmentStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: UpdateAssessmentStatusRequestBodyStatusEnum;
}


export class UpdateAssessmentStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssessmentStatusPathParams;

  @Metadata()
  headers: UpdateAssessmentStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssessmentStatusRequestBody;
}


export class UpdateAssessmentStatusResponse extends SpeakeasyBase {
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
  updateAssessmentStatusResponse?: shared.UpdateAssessmentStatusResponse;

  @Metadata()
  validationException?: any;
}
