import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteConnectionMessage
/** 
 * <p/>
**/
export class DeleteConnectionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
