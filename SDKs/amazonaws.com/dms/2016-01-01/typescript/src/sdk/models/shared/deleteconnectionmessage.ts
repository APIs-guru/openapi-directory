import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConnectionMessage
/** 
 * <p/>
**/
export class DeleteConnectionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
