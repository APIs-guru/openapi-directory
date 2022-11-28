import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
