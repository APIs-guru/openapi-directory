import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigRule } from "./configrule";
import { Tag } from "./tag";



export class PutConfigRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRule" })
  configRule: ConfigRule;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
