import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { Finding } from "./finding";
export declare class DescribeFindingsResponse extends SpeakeasyBase {
    failedItems: Map<string, FailedItemDetails>;
    findings: Finding[];
}
