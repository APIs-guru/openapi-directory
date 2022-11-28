import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListApprovalRuleTemplatesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateNames" })
  approvalRuleTemplateNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
