import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
