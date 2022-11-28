import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KernelCapabilities } from "./kernelcapabilities";
import { Device } from "./device";
import { Tmpfs } from "./tmpfs";



// LinuxParameters
/** 
 * Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>.
**/
export class LinuxParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: KernelCapabilities;

  @SpeakeasyMetadata({ data: "json, name=devices", elemType: Device })
  devices?: Device[];

  @SpeakeasyMetadata({ data: "json, name=initProcessEnabled" })
  initProcessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxSwap" })
  maxSwap?: number;

  @SpeakeasyMetadata({ data: "json, name=sharedMemorySize" })
  sharedMemorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=swappiness" })
  swappiness?: number;

  @SpeakeasyMetadata({ data: "json, name=tmpfs", elemType: Tmpfs })
  tmpfs?: Tmpfs[];
}
