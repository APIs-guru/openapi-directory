import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceDescription } from "./devicedescription";


export class ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Devices", elemType: shared.DeviceDescription })
  devices?: DeviceDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
