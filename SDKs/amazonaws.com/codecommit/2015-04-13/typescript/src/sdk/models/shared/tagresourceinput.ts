import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
