import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateDescription = "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription"
}


export class UpdateApprovalRuleTemplateDescriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateApprovalRuleTemplateDescriptionXAmzTargetEnum;
}


export class UpdateApprovalRuleTemplateDescriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateApprovalRuleTemplateDescriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateApprovalRuleTemplateDescriptionInput;
}


export class UpdateApprovalRuleTemplateDescriptionResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApprovalRuleTemplateDescriptionException?: any;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateApprovalRuleTemplateDescriptionOutput?: shared.UpdateApprovalRuleTemplateDescriptionOutput;
}
