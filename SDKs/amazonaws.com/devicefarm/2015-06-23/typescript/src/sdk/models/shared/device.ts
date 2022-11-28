import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceAvailabilityEnum } from "./deviceavailabilityenum";
import { Cpu } from "./cpu";
import { DeviceFormFactorEnum } from "./deviceformfactorenum";
import { DeviceInstance } from "./deviceinstance";
import { DevicePlatformEnum } from "./deviceplatformenum";
import { Resolution } from "./resolution";



// Device
/** 
 * Represents a device type that an app is tested against.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: DeviceAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: Cpu;

  @SpeakeasyMetadata({ data: "json, name=fleetName" })
  fleetName?: string;

  @SpeakeasyMetadata({ data: "json, name=fleetType" })
  fleetType?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: DeviceFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=heapSize" })
  heapSize?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: DeviceInstance })
  instances?: DeviceInstance[];

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=radio" })
  radio?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessEnabled" })
  remoteAccessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: Resolution;
}
