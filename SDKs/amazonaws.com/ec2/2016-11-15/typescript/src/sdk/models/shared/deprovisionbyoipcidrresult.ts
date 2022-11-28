import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class DeprovisionByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: ByoipCidr;
}
