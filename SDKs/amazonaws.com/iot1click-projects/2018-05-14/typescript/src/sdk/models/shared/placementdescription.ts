import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacementDescription
/** 
 * An object describing a project's placement.
**/
export class PlacementDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @SpeakeasyMetadata({ data: "json, name=placementName" })
  placementName: string;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
