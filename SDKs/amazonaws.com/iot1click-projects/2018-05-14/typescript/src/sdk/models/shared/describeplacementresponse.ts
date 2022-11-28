import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementDescription } from "./placementdescription";



export class DescribePlacementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placement" })
  placement: PlacementDescription;
}
