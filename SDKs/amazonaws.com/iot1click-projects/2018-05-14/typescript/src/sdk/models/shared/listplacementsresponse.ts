import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementSummary } from "./placementsummary";



export class ListPlacementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=placements", elemType: PlacementSummary })
  placements: PlacementSummary[];
}
