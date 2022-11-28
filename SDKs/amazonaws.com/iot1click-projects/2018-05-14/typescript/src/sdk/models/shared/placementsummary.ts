import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacementSummary
/** 
 * An object providing summary information for a particular placement.
**/
export class PlacementSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @SpeakeasyMetadata({ data: "json, name=placementName" })
  placementName: string;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
