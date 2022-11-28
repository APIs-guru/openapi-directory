import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagsToAdd" })
  tagsToAdd: Map<string, string>;
}
