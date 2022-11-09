import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleArn" })
  ruleArn?: string;
}
