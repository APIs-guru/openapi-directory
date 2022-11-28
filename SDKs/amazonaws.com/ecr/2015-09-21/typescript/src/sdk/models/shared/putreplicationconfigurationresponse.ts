import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";



export class PutReplicationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration?: ReplicationConfiguration;
}
