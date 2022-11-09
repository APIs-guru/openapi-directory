import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationPendingModifiedValues
/** 
 * Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html"> <code>ReplicationInstance</code> </a> user-defined data type. 
**/
export class ReplicationPendingModifiedValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;
}
