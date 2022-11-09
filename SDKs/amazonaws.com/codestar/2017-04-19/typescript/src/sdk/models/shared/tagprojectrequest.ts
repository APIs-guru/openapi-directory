import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
