import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementTemplate } from "./placementtemplate";



// ProjectDescription
/** 
 * An object providing detailed information for a particular project associated with an AWS account and region.
**/
export class ProjectDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=placementTemplate" })
  placementTemplate?: PlacementTemplate;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate: Date;
}
