import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aliases
/** 
 * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
**/
export class Aliases extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
