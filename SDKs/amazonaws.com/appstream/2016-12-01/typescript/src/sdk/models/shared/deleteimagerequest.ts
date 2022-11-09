import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
