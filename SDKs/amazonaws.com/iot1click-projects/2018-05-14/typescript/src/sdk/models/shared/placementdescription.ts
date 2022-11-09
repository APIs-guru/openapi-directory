import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlacementDescription
/** 
 * An object describing a project's placement.
**/
export class PlacementDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: Map<string, string>;

  @Metadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @Metadata({ data: "json, name=placementName" })
  placementName: string;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
