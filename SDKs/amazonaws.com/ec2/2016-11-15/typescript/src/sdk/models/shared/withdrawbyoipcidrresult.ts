import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class WithdrawByoipCidrResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byoipCidr?: ByoipCidr;
}
