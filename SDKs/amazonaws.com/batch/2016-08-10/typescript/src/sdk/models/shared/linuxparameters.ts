import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";
import { Tmpfs } from "./tmpfs";


// LinuxParameters
/** 
 * Linux-specific modifications that are applied to the container, such as details for device mappings.
**/
export class LinuxParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=initProcessEnabled" })
  initProcessEnabled?: boolean;

  @Metadata({ data: "json, name=maxSwap" })
  maxSwap?: number;

  @Metadata({ data: "json, name=sharedMemorySize" })
  sharedMemorySize?: number;

  @Metadata({ data: "json, name=swappiness" })
  swappiness?: number;

  @Metadata({ data: "json, name=tmpfs", elemType: shared.Tmpfs })
  tmpfs?: Tmpfs[];
}
