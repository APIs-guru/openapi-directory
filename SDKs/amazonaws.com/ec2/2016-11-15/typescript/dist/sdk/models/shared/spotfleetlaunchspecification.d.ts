import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
import { InstanceTypeEnum } from "./instancetypeenum";
import { SpotFleetMonitoring } from "./spotfleetmonitoring";
import { InstanceNetworkInterfaceSpecification } from "./instancenetworkinterfacespecification";
import { SpotPlacement } from "./spotplacement";
import { GroupIdentifier } from "./groupidentifier";
import { SpotFleetTagSpecification } from "./spotfleettagspecification";
/**
 * Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request or want to specify an EFA network device, you can't use <code>SpotFleetLaunchSpecification</code>; you must use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html">LaunchTemplateConfig</a>.
**/
export declare class SpotFleetLaunchSpecification extends SpeakeasyBase {
    addressingType?: string;
    blockDeviceMappings?: BlockDeviceMapping[];
    ebsOptimized?: boolean;
    iamInstanceProfile?: IamInstanceProfileSpecification;
    imageId?: string;
    instanceType?: InstanceTypeEnum;
    kernelId?: string;
    keyName?: string;
    monitoring?: SpotFleetMonitoring;
    networkInterfaces?: InstanceNetworkInterfaceSpecification[];
    placement?: SpotPlacement;
    ramdiskId?: string;
    securityGroups?: GroupIdentifier[];
    spotPrice?: string;
    subnetId?: string;
    tagSpecifications?: SpotFleetTagSpecification[];
    userData?: string;
    weightedCapacity?: number;
}
