import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



export class SetRulePrioritiesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Rule })
  rules?: Rule[];
}
