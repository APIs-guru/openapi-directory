import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceEvent } from "./deviceevent";



export class ListDeviceEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events", elemType: DeviceEvent })
  events?: DeviceEvent[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
