import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class StopGameSessionPlacementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlacementId" })
  placementId: string;
}
