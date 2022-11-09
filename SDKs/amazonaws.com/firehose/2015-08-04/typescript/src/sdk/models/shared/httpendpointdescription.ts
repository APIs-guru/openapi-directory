import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpEndpointDescription
/** 
 * Describes the HTTP endpoint selected as the destination. 
**/
export class HttpEndpointDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
