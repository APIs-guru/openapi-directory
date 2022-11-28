import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBlueprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
