import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
