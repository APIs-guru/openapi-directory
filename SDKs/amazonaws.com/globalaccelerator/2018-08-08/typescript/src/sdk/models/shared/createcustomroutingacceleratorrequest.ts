import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";



export class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
