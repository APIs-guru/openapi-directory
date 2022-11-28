import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";



export class PutReplicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration: ReplicationConfiguration;
}
