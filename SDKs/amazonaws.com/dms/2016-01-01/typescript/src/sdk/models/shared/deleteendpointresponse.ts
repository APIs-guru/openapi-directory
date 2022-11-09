import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";


// DeleteEndpointResponse
/** 
 * <p/>
**/
export class DeleteEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
