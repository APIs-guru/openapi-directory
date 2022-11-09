import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceTemplate } from "./devicetemplate";


// PlacementTemplate
/** 
 * An object defining the template for a placement.
**/
export class PlacementTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAttributes" })
  defaultAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=deviceTemplates", elemType: shared.DeviceTemplate })
  deviceTemplates?: Map<string, DeviceTemplate>;
}
