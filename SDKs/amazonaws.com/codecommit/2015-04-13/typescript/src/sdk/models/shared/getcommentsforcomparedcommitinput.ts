import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommentsForComparedCommitInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterCommitId" })
  afterCommitId: string;

  @Metadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
