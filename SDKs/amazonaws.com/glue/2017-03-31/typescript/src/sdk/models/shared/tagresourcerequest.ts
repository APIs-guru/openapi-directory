import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagsToAdd" })
  tagsToAdd: Map<string, string>;
}
