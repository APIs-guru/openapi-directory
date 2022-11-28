import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBlueprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
