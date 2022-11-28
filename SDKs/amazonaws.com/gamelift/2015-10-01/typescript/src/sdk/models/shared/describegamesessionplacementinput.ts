import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeGameSessionPlacementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlacementId" })
  placementId: string;
}
