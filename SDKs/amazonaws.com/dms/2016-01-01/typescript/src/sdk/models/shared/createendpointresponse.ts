import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// CreateEndpointResponse
/** 
 * <p/>
**/
export class CreateEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
