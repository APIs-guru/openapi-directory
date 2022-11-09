import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HoneycodeMetadata
/** 
 *  The connector metadata specific to Amazon Honeycode. 
**/
export class HoneycodeMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
