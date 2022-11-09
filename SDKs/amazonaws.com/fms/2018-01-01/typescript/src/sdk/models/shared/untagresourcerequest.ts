import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UntagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
