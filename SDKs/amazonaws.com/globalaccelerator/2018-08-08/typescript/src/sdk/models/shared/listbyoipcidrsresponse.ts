import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidr } from "./byoipcidr";



export class ListByoipCidrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByoipCidrs", elemType: ByoipCidr })
  byoipCidrs?: ByoipCidr[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
