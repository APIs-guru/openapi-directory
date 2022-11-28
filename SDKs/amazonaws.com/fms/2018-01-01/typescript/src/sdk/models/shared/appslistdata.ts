import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// AppsListData
/** 
 * An Firewall Manager applications list.
**/
export class AppsListData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsList", elemType: App })
  appsList: App[];

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=ListName" })
  listName: string;

  @SpeakeasyMetadata({ data: "json, name=ListUpdateToken" })
  listUpdateToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousAppsList", elemType: App, elemDepth: 2 })
  previousAppsList?: Map<string, App[]>;
}
