import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";


// CoreDevice
/** 
 * Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
**/
export class CoreDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=coreDeviceThingName" })
  coreDeviceThingName?: string;

  @Metadata({ data: "json, name=lastStatusUpdateTimestamp" })
  lastStatusUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=status" })
  status?: CoreDeviceStatusEnum;
}
