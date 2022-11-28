import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefreshSchemasMessage
/** 
 * <p/>
**/
export class RefreshSchemasMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
