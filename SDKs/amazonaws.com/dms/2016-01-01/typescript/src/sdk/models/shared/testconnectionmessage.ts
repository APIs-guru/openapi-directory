import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestConnectionMessage
/** 
 * <p/>
**/
export class TestConnectionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
