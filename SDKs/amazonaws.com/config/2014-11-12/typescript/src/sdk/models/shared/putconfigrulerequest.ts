import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigRule } from "./configrule";
import { Tag } from "./tag";


export class PutConfigRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRule" })
  configRule: ConfigRule;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
