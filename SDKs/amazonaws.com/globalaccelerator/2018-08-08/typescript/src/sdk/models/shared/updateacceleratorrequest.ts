import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";


export class UpdateAcceleratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
