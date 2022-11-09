import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fleet } from "./fleet";


export class DescribeFleetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fleets", elemType: shared.Fleet })
  fleets?: Fleet[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
