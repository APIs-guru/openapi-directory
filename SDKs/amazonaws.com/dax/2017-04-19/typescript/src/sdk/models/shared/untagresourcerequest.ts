import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
