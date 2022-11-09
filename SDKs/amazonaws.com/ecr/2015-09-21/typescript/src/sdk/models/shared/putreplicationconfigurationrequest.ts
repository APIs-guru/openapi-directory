import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";


export class PutReplicationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration: ReplicationConfiguration;
}
