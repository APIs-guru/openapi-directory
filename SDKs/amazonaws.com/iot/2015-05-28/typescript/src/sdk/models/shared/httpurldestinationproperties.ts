import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpUrlDestinationProperties
/** 
 * HTTP URL destination properties.
**/
export class HttpUrlDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;
}
