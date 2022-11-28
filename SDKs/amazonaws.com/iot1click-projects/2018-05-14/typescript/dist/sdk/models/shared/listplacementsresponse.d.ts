import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementSummary } from "./placementsummary";
export declare class ListPlacementsResponse extends SpeakeasyBase {
    nextToken?: string;
    placements: PlacementSummary[];
}
