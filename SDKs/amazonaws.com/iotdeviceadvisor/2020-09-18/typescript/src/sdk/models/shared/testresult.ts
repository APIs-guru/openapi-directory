import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupResult } from "./groupresult";


// TestResult
/** 
 * Show each group result.
**/
export class TestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.GroupResult })
  groups?: GroupResult[];
}
