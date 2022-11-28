import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";



export class SearchDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: DeviceSummary })
  devices: DeviceSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
