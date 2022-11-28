import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementGroup } from "./placementgroup";



export class DescribePlacementGroupsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PlacementGroup })
  placementGroups?: PlacementGroup[];
}
