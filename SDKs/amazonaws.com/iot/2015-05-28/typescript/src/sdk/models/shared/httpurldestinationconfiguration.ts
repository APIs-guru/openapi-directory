import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpUrlDestinationConfiguration
/** 
 * HTTP URL destination configuration used by the topic rule's HTTP action.
**/
export class HttpUrlDestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmationUrl" })
  confirmationUrl: string;
}
