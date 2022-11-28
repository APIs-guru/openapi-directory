import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 * The options that are available for an instance.
**/
export declare class OrderableDbInstanceOption extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    vpc?: boolean;
}
