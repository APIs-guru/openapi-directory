import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 *  A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key: string;

  @SpeakeasyMetadata()
  value?: string;
}
