import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestConnectionMessage
/** 
 * <p/>
**/
export class TestConnectionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
