import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartialMatch
/** 
 * The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
**/
export class PartialMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetViolationReasons" })
  targetViolationReasons?: string[];
}
