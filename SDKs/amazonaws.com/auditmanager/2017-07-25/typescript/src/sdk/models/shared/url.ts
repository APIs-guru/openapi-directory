import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Url
/** 
 *  A uniform resource locator, used as a unique identifier to locate a resource on the internet. 
**/
export class Url extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperlinkName" })
  hyperlinkName?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}
