import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagResourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}
