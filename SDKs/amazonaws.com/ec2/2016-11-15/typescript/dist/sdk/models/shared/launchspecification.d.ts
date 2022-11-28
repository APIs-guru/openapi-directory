import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { IamInstanceProfileSpecification } from "./iaminstanceprofilespecification";
import { InstanceTypeEnum } from "./instancetypeenum";
import { RunInstancesMonitoringEnabled } from "./runinstancesmonitoringenabled";
import { InstanceNetworkInterfaceSpecification } from "./instancenetworkinterfacespecification";
import { SpotPlacement } from "./spotplacement";
import { GroupIdentifier } from "./groupidentifier";
/**
 * Describes the launch specification for an instance.
**/
export declare class LaunchSpecification extends SpeakeasyBase {
    addressingType?: string;
    blockDeviceMappings?: BlockDeviceMapping[];
    ebsOptimized?: boolean;
    iamInstanceProfile?: IamInstanceProfileSpecification;
    imageId?: string;
    instanceType?: InstanceTypeEnum;
    kernelId?: string;
    keyName?: string;
    monitoring?: RunInstancesMonitoringEnabled;
    networkInterfaces?: InstanceNetworkInterfaceSpecification[];
    placement?: SpotPlacement;
    ramdiskId?: string;
    securityGroups?: GroupIdentifier[];
    subnetId?: string;
    userData?: string;
}
