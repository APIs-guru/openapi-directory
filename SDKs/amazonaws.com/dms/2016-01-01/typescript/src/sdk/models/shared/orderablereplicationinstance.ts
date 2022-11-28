import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseStatusValuesEnum } from "./releasestatusvaluesenum";



// OrderableReplicationInstance
/** 
 * In response to the <code>DescribeOrderableReplicationInstances</code> operation, this object describes an available replication instance. This description includes the replication instance's type, engine version, and allocated storage.
**/
export class OrderableReplicationInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=DefaultAllocatedStorage" })
  defaultAllocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=IncludedAllocatedStorage" })
  includedAllocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAllocatedStorage" })
  maxAllocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=MinAllocatedStorage" })
  minAllocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=ReleaseStatus" })
  releaseStatus?: ReleaseStatusValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: string;
}
