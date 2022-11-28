import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";



export class DescribeRegistryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationConfiguration" })
  replicationConfiguration?: ReplicationConfiguration;
}
