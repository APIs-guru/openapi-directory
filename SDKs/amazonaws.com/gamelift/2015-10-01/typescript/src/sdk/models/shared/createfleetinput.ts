import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateConfiguration } from "./certificateconfiguration";
import { IpPermission } from "./ippermission";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { FleetTypeEnum } from "./fleettypeenum";
import { LocationConfiguration } from "./locationconfiguration";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { RuntimeConfiguration } from "./runtimeconfiguration";
import { Tag } from "./tag";


// CreateFleetInput
/** 
 * Represents the input for a request operation.
**/
export class CreateFleetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildId" })
  buildId?: string;

  @Metadata({ data: "json, name=CertificateConfiguration" })
  certificateConfiguration?: CertificateConfiguration;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EC2InboundPermissions", elemType: shared.IpPermission })
  ec2InboundPermissions?: IpPermission[];

  @Metadata({ data: "json, name=EC2InstanceType" })
  ec2InstanceType: Ec2InstanceTypeEnum;

  @Metadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @Metadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @Metadata({ data: "json, name=Locations", elemType: shared.LocationConfiguration })
  locations?: LocationConfiguration[];

  @Metadata({ data: "json, name=LogPaths" })
  logPaths?: string[];

  @Metadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @Metadata({ data: "json, name=PeerVpcAwsAccountId" })
  peerVpcAwsAccountId?: string;

  @Metadata({ data: "json, name=PeerVpcId" })
  peerVpcId?: string;

  @Metadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  @Metadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;

  @Metadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=ServerLaunchParameters" })
  serverLaunchParameters?: string;

  @Metadata({ data: "json, name=ServerLaunchPath" })
  serverLaunchPath?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
