import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resolution
/** 
 * Represents the screen resolution of a device in height and width, expressed in pixels.
**/
export class Resolution extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
