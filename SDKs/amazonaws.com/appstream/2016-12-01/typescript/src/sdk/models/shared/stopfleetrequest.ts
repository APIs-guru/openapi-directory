import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
