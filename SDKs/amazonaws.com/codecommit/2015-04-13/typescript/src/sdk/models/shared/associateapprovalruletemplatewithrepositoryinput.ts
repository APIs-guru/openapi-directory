import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateApprovalRuleTemplateWithRepositoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
