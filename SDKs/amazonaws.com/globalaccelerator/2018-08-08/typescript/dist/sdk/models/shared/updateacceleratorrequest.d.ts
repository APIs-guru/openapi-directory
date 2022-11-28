import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class UpdateAcceleratorRequest extends SpeakeasyBase {
    acceleratorArn: string;
    enabled?: boolean;
    ipAddressType?: IpAddressTypeEnum;
    name?: string;
}
