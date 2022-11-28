import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
