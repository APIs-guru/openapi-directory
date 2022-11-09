import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsOfResourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
