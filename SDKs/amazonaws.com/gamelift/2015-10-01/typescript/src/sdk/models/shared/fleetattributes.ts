import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=BuildArn" })
  buildArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BuildId" })
  buildId?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateConfiguration" })
  certificateConfiguration?: CertificateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetType" })
  fleetType?: FleetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InstanceRoleArn" })
  instanceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: Ec2InstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LogPaths" })
  logPaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetricGroups" })
  metricGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NewGameSessionProtectionPolicy" })
  newGameSessionProtectionPolicy?: ProtectionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceCreationLimitPolicy" })
  resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  @SpeakeasyMetadata({ data: "json, name=ScriptArn" })
  scriptArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ScriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerLaunchParameters" })
  serverLaunchParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerLaunchPath" })
  serverLaunchPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: FleetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StoppedActions" })
  stoppedActions?: FleetActionEnum[];

  @SpeakeasyMetadata({ data: "json, name=TerminationTime" })
  terminationTime?: Date;
}
