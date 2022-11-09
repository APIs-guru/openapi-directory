import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=BackupPolicy" })
  backupPolicy?: BackupPolicyEnum;

  @Metadata({ data: "json, name=BackupRetentionPolicy" })
  backupRetentionPolicy?: BackupRetentionPolicy;

  @Metadata({ data: "json, name=Certificates" })
  certificates?: Certificates;

  @Metadata({ data: "json, name=ClusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=HsmType" })
  hsmType?: string;

  @Metadata({ data: "json, name=Hsms", elemType: shared.Hsm })
  hsms?: Hsm[];

  @Metadata({ data: "json, name=PreCoPassword" })
  preCoPassword?: string;

  @Metadata({ data: "json, name=SecurityGroup" })
  securityGroup?: string;

  @Metadata({ data: "json, name=SourceBackupId" })
  sourceBackupId?: string;

  @Metadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @Metadata({ data: "json, name=StateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=SubnetMapping" })
  subnetMapping?: Map<string, string>;

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
