import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReleaseStatusValuesEnum } from "./releasestatusvaluesenum";


// OrderableReplicationInstance
/** 
 * In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
**/
export class OrderableReplicationInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=DefaultAllocatedStorage" })
  defaultAllocatedStorage?: number;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=IncludedAllocatedStorage" })
  includedAllocatedStorage?: number;

  @Metadata({ data: "json, name=MaxAllocatedStorage" })
  maxAllocatedStorage?: number;

  @Metadata({ data: "json, name=MinAllocatedStorage" })
  minAllocatedStorage?: number;

  @Metadata({ data: "json, name=ReleaseStatus" })
  releaseStatus?: ReleaseStatusValuesEnum;

  @Metadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @Metadata({ data: "json, name=StorageType" })
  storageType?: string;
}
