import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Url
/** 
 *  A uniform resource locator, used as a unique identifier to locate a resource on the internet. 
**/
export class Url extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperlinkName" })
  hyperlinkName?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;
}
