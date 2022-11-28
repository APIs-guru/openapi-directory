import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaDeviceMount } from "./lambdadevicemount";
import { LambdaVolumeMount } from "./lambdavolumemount";



// LambdaContainerParams
/** 
 * Contains information about a container in which Lambda functions run on Greengrass core devices.
**/
export class LambdaContainerParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: LambdaDeviceMount })
  devices?: LambdaDeviceMount[];

  @SpeakeasyMetadata({ data: "json, name=memorySizeInKB" })
  memorySizeInKb?: number;

  @SpeakeasyMetadata({ data: "json, name=mountROSysfs" })
  mountRoSysfs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: LambdaVolumeMount })
  volumes?: LambdaVolumeMount[];
}
