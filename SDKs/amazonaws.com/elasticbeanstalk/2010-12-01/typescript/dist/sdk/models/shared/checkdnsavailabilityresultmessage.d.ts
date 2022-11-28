import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates if the specified CNAME is available.
**/
export declare class CheckDnsAvailabilityResultMessage extends SpeakeasyBase {
    available?: boolean;
    fullyQualifiedCname?: string;
}
