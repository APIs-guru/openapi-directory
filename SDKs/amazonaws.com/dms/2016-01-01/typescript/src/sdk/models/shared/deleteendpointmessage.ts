import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteEndpointMessage
/** 
 * <p/>
**/
export class DeleteEndpointMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
