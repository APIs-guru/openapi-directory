import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
