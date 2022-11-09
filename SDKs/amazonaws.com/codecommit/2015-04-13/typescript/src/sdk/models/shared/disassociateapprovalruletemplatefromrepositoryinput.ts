import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateApprovalRuleTemplateFromRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
