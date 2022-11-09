import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
