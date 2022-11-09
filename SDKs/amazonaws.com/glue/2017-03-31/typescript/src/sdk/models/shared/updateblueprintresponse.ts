import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBlueprintResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
