import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddTagsToResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
