import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HoneycodeMetadata
/** 
 *  The connector metadata specific to Amazon Honeycode. 
**/
export class HoneycodeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
