import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * Information about a tag.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key: string;

  @SpeakeasyMetadata()
  value?: string;
}
