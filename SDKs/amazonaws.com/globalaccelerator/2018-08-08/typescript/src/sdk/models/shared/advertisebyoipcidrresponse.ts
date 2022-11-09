import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ByoipCidr } from "./byoipcidr";


export class AdvertiseByoipCidrResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByoipCidr" })
  byoipCidr?: ByoipCidr;
}
