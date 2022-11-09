import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";


// ModifyEndpointResponse
/** 
 * <p/>
**/
export class ModifyEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: Endpoint;
}
