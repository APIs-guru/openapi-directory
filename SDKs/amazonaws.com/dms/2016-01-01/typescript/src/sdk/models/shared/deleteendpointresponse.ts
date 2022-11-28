import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// DeleteEndpointResponse
/** 
 * <p/>
**/
export class DeleteEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
