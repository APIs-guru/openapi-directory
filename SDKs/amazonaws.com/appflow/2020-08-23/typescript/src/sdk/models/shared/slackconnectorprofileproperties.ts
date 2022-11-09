import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlackConnectorProfileProperties
/** 
 *  The connector-specific profile properties required when using Slack. 
**/
export class SlackConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceUrl" })
  instanceUrl: string;
}
