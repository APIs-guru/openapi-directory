import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";


export class CreateCustomRoutingAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
