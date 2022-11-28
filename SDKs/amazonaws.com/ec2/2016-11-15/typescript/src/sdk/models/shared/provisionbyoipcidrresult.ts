import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class ProvisionByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: ByoipCidr;
}
