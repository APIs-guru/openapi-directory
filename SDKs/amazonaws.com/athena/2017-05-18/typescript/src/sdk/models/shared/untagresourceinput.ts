import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
