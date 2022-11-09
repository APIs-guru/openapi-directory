import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZendeskSourceProperties
/** 
 * The properties that are applied when using Zendesk as a flow source.
**/
export class ZendeskSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Object" })
  object: string;
}
