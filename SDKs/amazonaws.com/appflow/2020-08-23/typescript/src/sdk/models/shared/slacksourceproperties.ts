import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlackSourceProperties
/** 
 *  The properties that are applied when Slack is being used as a source. 
**/
export class SlackSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}
