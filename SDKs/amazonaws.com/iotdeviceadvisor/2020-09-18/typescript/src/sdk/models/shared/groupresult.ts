import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestCaseRun } from "./testcaserun";


// GroupResult
/** 
 * Show Group Result.
**/
export class GroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=tests", elemType: shared.TestCaseRun })
  tests?: TestCaseRun[];
}
