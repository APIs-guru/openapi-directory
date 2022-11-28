import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { User } from "./user";
/**
 * Contains information about a virtual MFA device.
**/
export declare class VirtualMfaDevice extends SpeakeasyBase {
    base32StringSeed?: string;
    enableDate?: Date;
    qrCodePng?: string;
    serialNumber: string;
    tags?: Tag[];
    user?: User;
}
