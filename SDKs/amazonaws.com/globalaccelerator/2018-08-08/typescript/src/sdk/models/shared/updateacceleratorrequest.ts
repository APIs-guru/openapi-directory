import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";



export class UpdateAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceleratorArn" })
  acceleratorArn: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IpAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
