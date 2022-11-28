import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyReplicationInstanceMessage
/** 
 * <p/>
**/
export class ModifyReplicationInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AllowMajorVersionUpgrade" })
  allowMajorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAZ" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceClass" })
  replicationInstanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceIdentifier" })
  replicationInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}
