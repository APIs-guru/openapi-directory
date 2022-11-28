import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationPendingModifiedValues
/** 
 * Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type. 
**/
export class ReplicationPendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;
}
