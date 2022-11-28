import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceTemplate } from "./devicetemplate";



// PlacementTemplate
/** 
 * An object defining the template for a placement.
**/
export class PlacementTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAttributes" })
  defaultAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=deviceTemplates", elemType: DeviceTemplate })
  deviceTemplates?: Map<string, DeviceTemplate>;
}
