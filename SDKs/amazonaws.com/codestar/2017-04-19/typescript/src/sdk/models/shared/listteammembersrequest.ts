import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTeamMembersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId: string;
}
