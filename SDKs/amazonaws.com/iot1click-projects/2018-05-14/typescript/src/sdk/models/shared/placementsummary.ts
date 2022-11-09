import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlacementSummary
/** 
 * An object providing summary information for a particular placement.
**/
export class PlacementSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @Metadata({ data: "json, name=placementName" })
  placementName: string;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
