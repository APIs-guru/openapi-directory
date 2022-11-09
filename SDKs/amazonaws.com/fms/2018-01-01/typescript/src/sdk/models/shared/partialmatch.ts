import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartialMatch
/** 
 * The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
**/
export class PartialMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=TargetViolationReasons" })
  targetViolationReasons?: string[];
}
