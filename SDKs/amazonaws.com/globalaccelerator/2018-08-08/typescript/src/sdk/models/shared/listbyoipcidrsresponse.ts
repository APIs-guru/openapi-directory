import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ByoipCidr } from "./byoipcidr";


export class ListByoipCidrsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ByoipCidrs", elemType: shared.ByoipCidr })
  byoipCidrs?: ByoipCidr[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
