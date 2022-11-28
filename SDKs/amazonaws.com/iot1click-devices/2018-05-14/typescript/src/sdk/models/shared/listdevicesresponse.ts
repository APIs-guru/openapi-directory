import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceDescription } from "./devicedescription";



export class ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: DeviceDescription })
  devices?: DeviceDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
