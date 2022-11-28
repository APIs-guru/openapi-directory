import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppsListDataSummary } from "./appslistdatasummary";



export class ListAppsListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsLists", elemType: AppsListDataSummary })
  appsLists?: AppsListDataSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
