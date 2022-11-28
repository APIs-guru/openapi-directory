import { SpeakeasyBase } from "../../../internal/utils";
import { Ebs } from "./ebs";
/**
 * Describes a block device mapping.
**/
export declare class BlockDeviceMapping extends SpeakeasyBase {
    deviceName: string;
    ebs?: Ebs;
    noDevice?: boolean;
    virtualName?: string;
}
