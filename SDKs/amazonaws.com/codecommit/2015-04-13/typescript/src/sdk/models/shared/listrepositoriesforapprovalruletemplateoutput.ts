import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListRepositoriesForApprovalRuleTemplateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositoryNames" })
  repositoryNames?: string[];
}
