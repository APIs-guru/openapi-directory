import { SpeakeasyBase } from "../../../internal/utils";
import { Exclusion } from "./exclusion";
import { FailedItemDetails } from "./faileditemdetails";
export declare class DescribeExclusionsResponse extends SpeakeasyBase {
    exclusions: Map<string, Exclusion>;
    failedItems: Map<string, FailedItemDetails>;
}
