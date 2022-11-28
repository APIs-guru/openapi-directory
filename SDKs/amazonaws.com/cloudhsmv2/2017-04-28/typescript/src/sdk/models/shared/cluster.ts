import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupPolicyEnum } from "./backuppolicyenum";
import { BackupRetentionPolicy } from "./backupretentionpolicy";
import { Certificates } from "./certificates";
import { Hsm } from "./hsm";
import { ClusterStateEnum } from "./clusterstateenum";
import { Tag } from "./tag";



// Cluster
/** 
 * Contains information about an AWS CloudHSM cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupPolicy" })
  backupPolicy?: BackupPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy?: BackupRetentionPolicy;

  @SpeakeasyMetadata({ data: "json, name=Certificates" })
  certificates?: Certificates;

  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=HsmType" })
  hsmType?: string;

  @SpeakeasyMetadata({ data: "json, name=Hsms", elemType: Hsm })
  hsms?: Hsm[];

  @SpeakeasyMetadata({ data: "json, name=PreCoPassword" })
  preCoPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroup" })
  securityGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetMapping" })
  subnetMapping?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
