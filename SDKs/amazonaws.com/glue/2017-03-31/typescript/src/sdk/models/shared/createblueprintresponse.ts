import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBlueprintResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
