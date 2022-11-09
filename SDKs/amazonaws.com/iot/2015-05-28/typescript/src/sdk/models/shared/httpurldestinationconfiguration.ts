import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpUrlDestinationConfiguration
/** 
 * HTTP URL destination configuration used by the topic rule's HTTP action.
**/
export class HttpUrlDestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmationUrl" })
  confirmationUrl: string;
}
