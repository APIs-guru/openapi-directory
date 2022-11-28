import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedActionHistoryItem } from "./managedactionhistoryitem";
/**
 * A result message containing a list of completed and failed managed actions.
**/
export declare class DescribeEnvironmentManagedActionHistoryResult extends SpeakeasyBase {
    managedActionHistoryItems?: ManagedActionHistoryItem[];
    nextToken?: string;
}
