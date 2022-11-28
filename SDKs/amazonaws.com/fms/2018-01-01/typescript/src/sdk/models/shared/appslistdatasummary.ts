import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// AppsListDataSummary
/** 
 * Details of the Firewall Manager applications list.
**/
export class AppsListDataSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppsList", elemType: App })
  appsList?: App[];

  @SpeakeasyMetadata({ data: "json, name=ListArn" })
  listArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ListId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=ListName" })
  listName?: string;
}
