import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateApprovalRuleTemplateNameXAmzTargetEnum {
    CodeCommit20150413UpdateApprovalRuleTemplateName = "CodeCommit_20150413.UpdateApprovalRuleTemplateName"
}


export class UpdateApprovalRuleTemplateNameHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateApprovalRuleTemplateNameXAmzTargetEnum;
}


export class UpdateApprovalRuleTemplateNameRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateApprovalRuleTemplateNameHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateApprovalRuleTemplateNameInput;
}


export class UpdateApprovalRuleTemplateNameResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameAlreadyExistsException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateApprovalRuleTemplateNameOutput?: shared.UpdateApprovalRuleTemplateNameOutput;
}
