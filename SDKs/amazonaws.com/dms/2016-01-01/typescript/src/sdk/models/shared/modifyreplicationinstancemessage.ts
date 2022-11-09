import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyReplicationInstanceMessage
/** 
 * <p/>
**/
export class ModifyReplicationInstanceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AllowMajorVersionUpgrade" })
  allowMajorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=ApplyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;

  @Metadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @Metadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @Metadata({ data: "json, name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}
