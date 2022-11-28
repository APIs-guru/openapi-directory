import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivateEventSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
