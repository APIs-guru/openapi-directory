import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";



export class DescribeFleetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fleets", elemType: Fleet })
  fleets?: Fleet[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
