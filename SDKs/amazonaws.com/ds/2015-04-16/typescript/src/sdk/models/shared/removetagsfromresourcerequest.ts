import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
