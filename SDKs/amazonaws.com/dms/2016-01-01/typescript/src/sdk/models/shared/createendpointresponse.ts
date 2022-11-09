import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";


// CreateEndpointResponse
/** 
 * <p/>
**/
export class CreateEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
