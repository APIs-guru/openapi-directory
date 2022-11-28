import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBlueprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
