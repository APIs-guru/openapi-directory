import { SpeakeasyBase } from "../../../internal/utils";
import { TenancyEnum } from "./tenancyenum";
/**
 * Describes Spot Instance placement.
**/
export declare class SpotPlacement extends SpeakeasyBase {
    availabilityZone?: string;
    groupName?: string;
    tenancy?: TenancyEnum;
}
