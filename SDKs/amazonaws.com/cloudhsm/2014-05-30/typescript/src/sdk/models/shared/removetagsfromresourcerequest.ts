import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagKeyList" })
  tagKeyList: string[];
}
