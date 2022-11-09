import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
