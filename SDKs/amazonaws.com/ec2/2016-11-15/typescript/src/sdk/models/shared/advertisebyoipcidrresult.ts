import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class AdvertiseByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: ByoipCidr;
}
