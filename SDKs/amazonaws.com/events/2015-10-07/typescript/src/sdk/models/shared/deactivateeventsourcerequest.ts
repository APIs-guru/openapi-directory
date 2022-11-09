import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeactivateEventSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
