import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RiProductDescriptionEnum } from "./riproductdescriptionenum";
/**
 * Describes the maximum price per hour that you are willing to pay for a Spot Instance.
**/
export declare class SpotPrice extends SpeakeasyBase {
    availabilityZone?: string;
    instanceType?: InstanceTypeEnum;
    productDescription?: RiProductDescriptionEnum;
    spotPrice?: string;
    timestamp?: Date;
}
