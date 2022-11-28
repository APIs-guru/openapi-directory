import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateConfiguration } from "./certificateconfiguration";
import { FleetTypeEnum } from "./fleettypeenum";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { FleetStatusEnum } from "./fleetstatusenum";
import { FleetActionEnum } from "./fleetactionenum";
/**
 * <p>Describes a GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>DescribeFleetAttributes</a> </p>
**/
export declare class FleetAttributes extends SpeakeasyBase {
    buildArn?: string;
    buildId?: string;
    certificateConfiguration?: CertificateConfiguration;
    creationTime?: Date;
    description?: string;
    fleetArn?: string;
    fleetId?: string;
    fleetType?: FleetTypeEnum;
    instanceRoleArn?: string;
    instanceType?: Ec2InstanceTypeEnum;
    logPaths?: string[];
    metricGroups?: string[];
    name?: string;
    newGameSessionProtectionPolicy?: ProtectionPolicyEnum;
    operatingSystem?: OperatingSystemEnum;
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    scriptArn?: string;
    scriptId?: string;
    serverLaunchParameters?: string;
    serverLaunchPath?: string;
    status?: FleetStatusEnum;
    stoppedActions?: FleetActionEnum[];
    terminationTime?: Date;
}
