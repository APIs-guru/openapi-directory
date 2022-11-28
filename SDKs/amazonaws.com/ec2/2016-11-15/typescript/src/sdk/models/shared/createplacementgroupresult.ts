import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroup } from "./placementgroup";



export class CreatePlacementGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  placementGroup?: PlacementGroup;
}
