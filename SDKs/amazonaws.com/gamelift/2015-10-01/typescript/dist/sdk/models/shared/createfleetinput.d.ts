import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateConfiguration } from "./certificateconfiguration";
import { IpPermission } from "./ippermission";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
import { FleetTypeEnum } from "./fleettypeenum";
import { LocationConfiguration } from "./locationconfiguration";
import { ProtectionPolicyEnum } from "./protectionpolicyenum";
import { ResourceCreationLimitPolicy } from "./resourcecreationlimitpolicy";
import { RuntimeConfiguration } from "./runtimeconfiguration";
import { Tag } from "./tag";
/**
 * Represents the input for a request operation.
**/
export declare class CreateFleetInput extends SpeakeasyBase {
    buildId?: string;
    certificateConfiguration?: CertificateConfiguration;
    description?: string;
    ec2InboundPermissions?: IpPermission[];
    ec2InstanceType: Ec2InstanceTypeEnum;
    fleetType?: FleetTypeEnum;
    instanceRoleArn?: string;
    locations?: LocationConfiguration[];
    logPaths?: string[];
    metricGroups?: string[];
    name: string;
    newGameSessionProtectionPolicy?: ProtectionPolicyEnum;
    peerVpcAwsAccountId?: string;
    peerVpcId?: string;
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    runtimeConfiguration?: RuntimeConfiguration;
    scriptId?: string;
    serverLaunchParameters?: string;
    serverLaunchPath?: string;
    tags?: Tag[];
}
