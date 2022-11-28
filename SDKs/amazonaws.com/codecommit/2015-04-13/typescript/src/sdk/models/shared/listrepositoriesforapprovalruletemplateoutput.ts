import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRepositoriesForApprovalRuleTemplateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryNames" })
  repositoryNames?: string[];
}
