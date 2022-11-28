import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



export class DescribeRulesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata({ elemType: Rule })
  rules?: Rule[];
}
