import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CoreDevice } from "./coredevice";


export class ListCoreDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=coreDevices", elemType: shared.CoreDevice })
  coreDevices?: CoreDevice[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
