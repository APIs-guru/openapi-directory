import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName: string;
}
