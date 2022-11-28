import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";



export class SetIpAddressTypeOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipAddressType?: IpAddressTypeEnum;
}
