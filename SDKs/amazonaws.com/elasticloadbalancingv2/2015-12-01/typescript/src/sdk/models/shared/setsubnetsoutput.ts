import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";



export class SetSubnetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata()
  ipAddressType?: IpAddressTypeEnum;
}
