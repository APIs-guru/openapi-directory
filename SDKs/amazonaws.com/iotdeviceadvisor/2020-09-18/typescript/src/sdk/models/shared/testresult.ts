import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";



// TestResult
/** 
 * Show each group result.
**/
export class TestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupResult })
  groups?: GroupResult[];
}
