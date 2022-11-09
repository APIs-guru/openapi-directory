import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";


export class DescribeRegistryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration?: ReplicationConfiguration;
}
