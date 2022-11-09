import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=availability" })
  availability?: DeviceAvailabilityEnum;

  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=cpu" })
  cpu?: Cpu;

  @Metadata({ data: "json, name=fleetName" })
  fleetName?: string;

  @Metadata({ data: "json, name=fleetType" })
  fleetType?: string;

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: DeviceFormFactorEnum;

  @Metadata({ data: "json, name=heapSize" })
  heapSize?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=instances", elemType: shared.DeviceInstance })
  instances?: DeviceInstance[];

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=modelId" })
  modelId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DevicePlatformEnum;

  @Metadata({ data: "json, name=radio" })
  radio?: string;

  @Metadata({ data: "json, name=remoteAccessEnabled" })
  remoteAccessEnabled?: boolean;

  @Metadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @Metadata({ data: "json, name=resolution" })
  resolution?: Resolution;
}
