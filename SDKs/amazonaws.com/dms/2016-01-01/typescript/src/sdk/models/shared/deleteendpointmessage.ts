import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteEndpointMessage
/** 
 * <p/>
**/
export class DeleteEndpointMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;
}
