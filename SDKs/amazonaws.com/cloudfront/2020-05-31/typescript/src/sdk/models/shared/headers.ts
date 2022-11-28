import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Headers
/** 
 * Contains a list of HTTP header names.
**/
export class Headers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
