import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCommentsForComparedCommitInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterCommitId" })
  afterCommitId: string;

  @SpeakeasyMetadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
