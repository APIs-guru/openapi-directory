import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeprovisionByoipCidrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cidr" })
  cidr: string;
}
