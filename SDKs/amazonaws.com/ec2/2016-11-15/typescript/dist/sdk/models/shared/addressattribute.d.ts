import { SpeakeasyBase } from "../../../internal/utils";
import { PtrUpdateStatus } from "./ptrupdatestatus";
/**
 * The attributes associated with an Elastic IP address.
**/
export declare class AddressAttribute extends SpeakeasyBase {
    allocationId?: string;
    ptrRecord?: string;
    ptrRecordUpdate?: PtrUpdateStatus;
    publicIp?: string;
}
