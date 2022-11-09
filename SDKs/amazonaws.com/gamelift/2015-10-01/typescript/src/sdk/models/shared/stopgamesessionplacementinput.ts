import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class StopGameSessionPlacementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlacementId" })
  placementId: string;
}
