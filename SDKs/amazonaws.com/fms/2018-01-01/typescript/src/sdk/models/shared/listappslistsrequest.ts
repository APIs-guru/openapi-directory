import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAppsListsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultLists" })
  defaultLists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
