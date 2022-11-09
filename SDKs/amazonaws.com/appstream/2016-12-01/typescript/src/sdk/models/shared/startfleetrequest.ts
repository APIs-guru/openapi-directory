import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
