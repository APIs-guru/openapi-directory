import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementDescription } from "./placementdescription";


export class DescribePlacementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=placement" })
  placement: PlacementDescription;
}
