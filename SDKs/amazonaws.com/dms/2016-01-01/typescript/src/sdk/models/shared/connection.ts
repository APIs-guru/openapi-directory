import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Connection
/** 
 * Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @Metadata({ data: "json, name=EndpointIdentifier" })
  endpointIdentifier?: string;

  @Metadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @Metadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
