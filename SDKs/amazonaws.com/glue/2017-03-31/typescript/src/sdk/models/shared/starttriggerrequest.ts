import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
