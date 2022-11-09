import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}
