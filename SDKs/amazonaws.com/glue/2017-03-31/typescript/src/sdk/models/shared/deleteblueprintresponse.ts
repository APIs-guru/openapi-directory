import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBlueprintResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
