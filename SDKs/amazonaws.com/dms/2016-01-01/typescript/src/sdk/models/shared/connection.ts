import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Connection
/** 
 * Status of the connection between an endpoint and a replication instance, including Amazon Resource Names (ARNs) and the last error message issued.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointIdentifier" })
  endpointIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
