import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class AdvertiseByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByoipCidr" })
  byoipCidr?: ByoipCidr;
}
