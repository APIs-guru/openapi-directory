import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaDeviceMount } from "./lambdadevicemount";
import { LambdaVolumeMount } from "./lambdavolumemount";
/**
 * Contains information about a container in which Lambda functions run on Greengrass core devices.
**/
export declare class LambdaContainerParams extends SpeakeasyBase {
    devices?: LambdaDeviceMount[];
    memorySizeInKb?: number;
    mountRoSysfs?: boolean;
    volumes?: LambdaVolumeMount[];
}
