import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
