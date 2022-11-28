import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateApprovalRuleTemplateWithRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
