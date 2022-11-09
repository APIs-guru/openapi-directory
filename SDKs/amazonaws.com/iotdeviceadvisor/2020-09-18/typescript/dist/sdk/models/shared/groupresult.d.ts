import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TestCaseRun } from "./testcaserun";
/**
 * Show Group Result.
**/
export declare class GroupResult extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
    tests?: TestCaseRun[];
}
