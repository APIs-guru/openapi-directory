import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchAssociateApprovalRuleTemplateWithRepositoriesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @Metadata({ data: "json, name=repositoryNames" })
  repositoryNames: string[];
}
