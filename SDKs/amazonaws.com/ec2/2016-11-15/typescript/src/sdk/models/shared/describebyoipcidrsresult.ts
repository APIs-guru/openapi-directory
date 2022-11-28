import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class DescribeByoipCidrsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ByoipCidr })
  byoipCidrs?: ByoipCidr[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
