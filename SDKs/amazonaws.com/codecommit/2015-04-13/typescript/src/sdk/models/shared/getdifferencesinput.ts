import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDifferencesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=afterCommitSpecifier" })
  afterCommitSpecifier: string;

  @SpeakeasyMetadata({ data: "json, name=afterPath" })
  afterPath?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeCommitSpecifier" })
  beforeCommitSpecifier?: string;

  @SpeakeasyMetadata({ data: "json, name=beforePath" })
  beforePath?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
