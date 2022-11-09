import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceEvent } from "./deviceevent";


export class ListDeviceEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events", elemType: shared.DeviceEvent })
  events?: DeviceEvent[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
