import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateConfiguration } from "./certificateconfiguration";
import { FleetTypeEnum } from "./fleettypeenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { FleetStatusEnum } from "./fleetstatusenum";
import { FleetActionEnum } from "./fleetactionenum";


// FleetAttributes
/** 
 * <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
**/
export class FleetAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildArn" })
  buildArn?: string;

  @Metadata({ data: "json, name=BuildId" })
  buildId?: string;

  @Metadata({ data: "json, name=CertificateConfiguration" })
  certificateConfiguration?: CertificateConfiguration;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @Metadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: Ec2InstanceTypeEnum;

  @Metadata({ data: "json, name=LogPaths" })
  logPaths?: string[];

  @Metadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  @Metadata({ data: "json, name=ScriptArn" })
  scriptArn?: string;

  @Metadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=ServerLaunchParameters" })
  serverLaunchParameters?: string;

  @Metadata({ data: "json, name=ServerLaunchPath" })
  serverLaunchPath?: string;

  @Metadata({ data: "json, name=Status" })
  status?: FleetStatusEnum;

  @Metadata({ data: "json, name=StoppedActions" })
  stoppedActions?: FleetActionEnum[];

  @Metadata({ data: "json, name=TerminationTime" })
  terminationTime?: Date;
}
