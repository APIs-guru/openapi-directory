import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveTagsFromResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
