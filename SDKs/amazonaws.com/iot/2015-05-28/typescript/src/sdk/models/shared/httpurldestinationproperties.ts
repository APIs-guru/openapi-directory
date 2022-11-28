import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpUrlDestinationProperties
/** 
 * HTTP URL destination properties.
**/
export class HttpUrlDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmationUrl" })
  confirmationUrl?: string;
}
