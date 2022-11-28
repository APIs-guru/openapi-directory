import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlackMetadata
/** 
 *  The connector metadata specific to Slack. 
**/
export class SlackMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oAuthScopes" })
  oAuthScopes?: string[];
}
