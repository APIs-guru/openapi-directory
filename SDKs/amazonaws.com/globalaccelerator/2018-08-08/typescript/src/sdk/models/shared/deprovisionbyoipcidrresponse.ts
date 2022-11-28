import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class DeprovisionByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByoipCidr" })
  byoipCidr?: ByoipCidr;
}
