import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeactivateEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
