import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacementSummary } from "./placementsummary";


export class ListPlacementsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=placements", elemType: shared.PlacementSummary })
  placements: PlacementSummary[];
}
