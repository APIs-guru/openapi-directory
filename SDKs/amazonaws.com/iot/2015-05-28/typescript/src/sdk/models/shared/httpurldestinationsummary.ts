import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpUrlDestinationSummary
/** 
 * Information about an HTTP URL destination.
**/
export class HttpUrlDestinationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;
}
