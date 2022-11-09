import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdvertiseByoipCidrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cidr" })
  cidr: string;
}
