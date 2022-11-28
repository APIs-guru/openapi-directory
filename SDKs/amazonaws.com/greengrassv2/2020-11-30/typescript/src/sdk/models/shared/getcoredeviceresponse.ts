import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";



export class GetCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=coreDeviceThingName" })
  coreDeviceThingName?: string;

  @SpeakeasyMetadata({ data: "json, name=coreVersion" })
  coreVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lastStatusUpdateTimestamp" })
  lastStatusUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CoreDeviceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
