import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413DeleteApprovalRuleTemplate = "CodeCommit_20150413.DeleteApprovalRuleTemplate"
}


export class DeleteApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApprovalRuleTemplateXAmzTargetEnum;
}


export class DeleteApprovalRuleTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApprovalRuleTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApprovalRuleTemplateInput;
}


export class DeleteApprovalRuleTemplateResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateInUseException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteApprovalRuleTemplateOutput?: shared.DeleteApprovalRuleTemplateOutput;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  statusCode: number;
}
