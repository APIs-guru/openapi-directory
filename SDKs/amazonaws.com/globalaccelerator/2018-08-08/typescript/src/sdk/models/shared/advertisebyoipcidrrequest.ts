import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdvertiseByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cidr" })
  cidr: string;
}
