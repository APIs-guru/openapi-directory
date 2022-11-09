import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CoreDeviceStatusEnum } from "./coredevicestatusenum";


export class GetCoreDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=coreDeviceThingName" })
  coreDeviceThingName?: string;

  @Metadata({ data: "json, name=coreVersion" })
  coreVersion?: string;

  @Metadata({ data: "json, name=lastStatusUpdateTimestamp" })
  lastStatusUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=status" })
  status?: CoreDeviceStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
