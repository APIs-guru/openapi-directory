import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlackConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Slack. 
**/
export class SlackConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
