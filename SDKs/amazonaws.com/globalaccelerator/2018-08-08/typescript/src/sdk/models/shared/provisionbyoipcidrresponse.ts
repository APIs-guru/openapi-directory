import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class ProvisionByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByoipCidr" })
  byoipCidr?: ByoipCidr;
}
