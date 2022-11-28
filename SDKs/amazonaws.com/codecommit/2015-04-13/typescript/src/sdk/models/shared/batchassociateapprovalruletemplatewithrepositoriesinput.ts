import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchAssociateApprovalRuleTemplateWithRepositoriesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryNames" })
  repositoryNames: string[];
}
