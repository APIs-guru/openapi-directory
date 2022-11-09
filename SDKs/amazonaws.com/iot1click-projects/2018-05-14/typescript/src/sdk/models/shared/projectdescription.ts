import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementTemplate } from "./placementtemplate";


// ProjectDescription
/** 
 * An object providing detailed information for a particular project associated with an AWS account and region.
**/
export class ProjectDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=placementTemplate" })
  placementTemplate?: PlacementTemplate;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
