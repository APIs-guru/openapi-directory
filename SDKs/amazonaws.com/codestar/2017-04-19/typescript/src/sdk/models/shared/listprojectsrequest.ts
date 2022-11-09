import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListProjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
