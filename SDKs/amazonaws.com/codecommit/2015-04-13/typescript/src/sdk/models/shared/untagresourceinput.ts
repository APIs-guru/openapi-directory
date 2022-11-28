import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UntagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=tagKeys" })
  tagKeys: string[];
}
