import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @Metadata({ data: "json, name=repositoryNames" })
  repositoryNames: string[];
}
