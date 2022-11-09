import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";


// AppsListDataSummary
/** 
 * Details of the Firewall Manager applications list.
**/
export class AppsListDataSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppsList", elemType: shared.App })
  appsList?: App[];

  @Metadata({ data: "json, name=ListArn" })
  listArn?: string;

  @Metadata({ data: "json, name=ListId" })
  listId?: string;

  @Metadata({ data: "json, name=ListName" })
  listName?: string;
}
