import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



export class CreateRuleOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Rule })
  rules?: Rule[];
}
