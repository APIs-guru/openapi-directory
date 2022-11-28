import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleArn" })
  ruleArn?: string;
}
