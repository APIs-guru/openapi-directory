import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";


export class PutReplicationConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration?: ReplicationConfiguration;
}
