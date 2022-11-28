import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestCaseRun } from "./testcaserun";



// GroupResult
/** 
 * Show Group Result.
**/
export class GroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=tests", elemType: TestCaseRun })
  tests?: TestCaseRun[];
}
