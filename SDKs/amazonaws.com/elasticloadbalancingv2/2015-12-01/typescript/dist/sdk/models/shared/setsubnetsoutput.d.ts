import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class SetSubnetsOutput extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    ipAddressType?: IpAddressTypeEnum;
}
