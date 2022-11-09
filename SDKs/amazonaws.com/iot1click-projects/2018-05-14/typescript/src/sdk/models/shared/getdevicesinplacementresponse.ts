import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevicesInPlacementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices" })
  devices: Map<string, string>;
}
