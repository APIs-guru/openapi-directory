import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpUrlDestinationSummary
/** 
 * Information about an HTTP URL destination.
**/
export class HttpUrlDestinationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;
}
