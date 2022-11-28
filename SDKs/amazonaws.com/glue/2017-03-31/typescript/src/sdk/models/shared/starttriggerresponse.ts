import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
