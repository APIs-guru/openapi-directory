import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEventBusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
