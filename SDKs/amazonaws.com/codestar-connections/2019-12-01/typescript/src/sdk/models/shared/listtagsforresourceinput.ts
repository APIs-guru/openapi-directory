import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsForResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
