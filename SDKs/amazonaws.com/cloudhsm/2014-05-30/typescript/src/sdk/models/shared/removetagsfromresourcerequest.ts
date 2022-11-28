import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeyList" })
  tagKeyList: string[];
}
