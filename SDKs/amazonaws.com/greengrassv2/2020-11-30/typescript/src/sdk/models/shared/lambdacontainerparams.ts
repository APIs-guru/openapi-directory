import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaDeviceMount } from "./lambdadevicemount";
import { LambdaVolumeMount } from "./lambdavolumemount";


// LambdaContainerParams
/** 
 * Contains information about a container in which Lambda functions run on Greengrass core devices.
**/
export class LambdaContainerParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.LambdaDeviceMount })
  devices?: LambdaDeviceMount[];

  @Metadata({ data: "json, name=memorySizeInKB" })
  memorySizeInKb?: number;

  @Metadata({ data: "json, name=mountROSysfs" })
  mountRoSysfs?: boolean;

  @Metadata({ data: "json, name=volumes", elemType: shared.LambdaVolumeMount })
  volumes?: LambdaVolumeMount[];
}
