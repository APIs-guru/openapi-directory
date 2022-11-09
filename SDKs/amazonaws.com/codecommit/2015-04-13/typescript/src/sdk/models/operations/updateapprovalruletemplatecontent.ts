import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateApprovalRuleTemplateContentXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateContent = "CodeCommit_20150413.UpdateApprovalRuleTemplateContent"
}


export class UpdateApprovalRuleTemplateContentHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateApprovalRuleTemplateContentXAmzTargetEnum;
}


export class UpdateApprovalRuleTemplateContentRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateApprovalRuleTemplateContentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateApprovalRuleTemplateContentInput;
}


export class UpdateApprovalRuleTemplateContentResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateContentRequiredException?: any;

  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApprovalRuleTemplateContentException?: any;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  invalidRuleContentSha256Exception?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateApprovalRuleTemplateContentOutput?: shared.UpdateApprovalRuleTemplateContentOutput;
}
