import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
