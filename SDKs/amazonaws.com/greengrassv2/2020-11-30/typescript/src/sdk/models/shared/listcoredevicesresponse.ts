import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoreDevice } from "./coredevice";



export class ListCoreDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coreDevices", elemType: CoreDevice })
  coreDevices?: CoreDevice[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
