import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";
import { App } from "./app";


// AppsListData
/** 
 * An Firewall Manager applications list.
**/
export class AppsListData extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsList", elemType: shared.App })
  appsList: App[];

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=ListId" })
  listId?: string;

  @Metadata({ data: "json, name=ListName" })
  listName: string;

  @Metadata({ data: "json, name=ListUpdateToken" })
  listUpdateToken?: string;

  @Metadata({ data: "json, name=PreviousAppsList", elemType: shared.App, elemDepth: 2 })
  previousAppsList?: Map<string, App[]>;
}
