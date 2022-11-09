import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageBuilderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
