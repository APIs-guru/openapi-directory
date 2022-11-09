import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppsListDataSummary } from "./appslistdatasummary";


export class ListAppsListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsLists", elemType: shared.AppsListDataSummary })
  appsLists?: AppsListDataSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
