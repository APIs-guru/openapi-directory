import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedApprovalRuleTemplatesForRepositoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateNames" })
  approvalRuleTemplateNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
