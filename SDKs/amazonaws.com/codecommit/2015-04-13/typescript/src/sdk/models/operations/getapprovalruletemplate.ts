import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413GetApprovalRuleTemplate = "CodeCommit_20150413.GetApprovalRuleTemplate"
}


export class GetApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetApprovalRuleTemplateXAmzTargetEnum;
}


export class GetApprovalRuleTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApprovalRuleTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetApprovalRuleTemplateInput;
}


export class GetApprovalRuleTemplateResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getApprovalRuleTemplateOutput?: shared.GetApprovalRuleTemplateOutput;

  @Metadata()
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  statusCode: number;
}
