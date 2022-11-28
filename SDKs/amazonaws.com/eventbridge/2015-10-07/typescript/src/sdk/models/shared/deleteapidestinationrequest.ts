import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApiDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
