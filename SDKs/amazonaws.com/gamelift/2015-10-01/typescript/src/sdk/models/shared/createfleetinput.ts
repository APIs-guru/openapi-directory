import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateConfiguration" })
  certificateConfiguration?: CertificateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EC2InboundPermissions", elemType: IpPermission })
  ec2InboundPermissions?: IpPermission[];

  @SpeakeasyMetadata({ data: "json, name=EC2InstanceType" })
  ec2InstanceType: Ec2InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Locations", elemType: LocationConfiguration })
  locations?: LocationConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=LogPaths" })
  logPaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcAwsAccountId" })
  peerVpcAwsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=PeerVpcId" })
  peerVpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  @SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerLaunchParameters" })
  serverLaunchParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerLaunchPath" })
  serverLaunchPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
