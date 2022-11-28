import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
**/
export declare class MfaDevice extends SpeakeasyBase {
    enableDate: Date;
    serialNumber: string;
    userName: string;
}
