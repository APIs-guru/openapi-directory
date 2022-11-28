import { SpeakeasyBase } from "../../../internal/utils";
import { EventInfo } from "./eventinfo";
import { VendorNameEnum } from "./vendornameenum";
/**
 * Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
**/
export declare class RequestMetadata extends SpeakeasyBase {
    eventInfo?: EventInfo;
    requestId?: string;
    requester?: string;
    vendorName?: VendorNameEnum;
}
