import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
