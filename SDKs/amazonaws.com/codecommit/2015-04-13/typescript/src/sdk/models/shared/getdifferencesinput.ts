import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDifferencesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=afterCommitSpecifier" })
  afterCommitSpecifier: string;

  @Metadata({ data: "json, name=afterPath" })
  afterPath?: string;

  @Metadata({ data: "json, name=beforeCommitSpecifier" })
  beforeCommitSpecifier?: string;

  @Metadata({ data: "json, name=beforePath" })
  beforePath?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
