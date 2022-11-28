import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";



// CoreDevice
/** 
 * Contains information about a Greengrass core device, which is an IoT thing that runs the IoT Greengrass Core software.
**/
export class CoreDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coreDeviceThingName" })
  coreDeviceThingName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatusUpdateTimestamp" })
  lastStatusUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CoreDeviceStatusEnum;
}
