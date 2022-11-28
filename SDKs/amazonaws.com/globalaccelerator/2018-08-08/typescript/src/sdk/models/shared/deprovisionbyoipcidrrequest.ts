import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeprovisionByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cidr" })
  cidr: string;
}
