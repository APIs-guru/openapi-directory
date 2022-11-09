import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnclaimDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: string;
}
