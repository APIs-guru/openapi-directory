import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlackSourceProperties
/** 
 *  The properties that are applied when Slack is being used as a source. 
**/
export class SlackSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}
