import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlackMetadata
/** 
 *  The connector metadata specific to Slack. 
**/
export class SlackMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
