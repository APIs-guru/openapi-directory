import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpEndpointDescription
/** 
 * Describes the HTTP endpoint selected as the destination. 
**/
export class HttpEndpointDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
