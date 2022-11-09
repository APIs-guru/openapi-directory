import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceSummary } from "./devicesummary";


export class SearchDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.DeviceSummary })
  devices: DeviceSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
