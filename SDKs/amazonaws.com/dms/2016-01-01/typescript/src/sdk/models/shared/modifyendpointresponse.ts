import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// ModifyEndpointResponse
/** 
 * <p/>
**/
export class ModifyEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
