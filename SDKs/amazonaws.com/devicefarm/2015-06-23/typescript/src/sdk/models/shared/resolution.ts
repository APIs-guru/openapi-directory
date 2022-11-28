import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resolution
/** 
 * Represents the screen resolution of a device in height and width, expressed in pixels.
**/
export class Resolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
