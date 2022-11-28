import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevicesInPlacementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices: Map<string, string>;
}
