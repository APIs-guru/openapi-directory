import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RefreshSchemasMessage
/** 
 * <p/>
**/
export class RefreshSchemasMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
