import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeGameSessionPlacementInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeGameSessionPlacementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlacementId" })
  placementId: string;
}
