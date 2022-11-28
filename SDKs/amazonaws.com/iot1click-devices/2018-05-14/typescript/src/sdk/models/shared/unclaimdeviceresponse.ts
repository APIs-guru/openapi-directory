import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnclaimDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
