import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
export declare class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    enabled?: boolean;
    idempotencyToken: string;
    ipAddressType?: IpAddressTypeEnum;
    ipAddresses?: string[];
    name: string;
    tags?: Tag[];
}
