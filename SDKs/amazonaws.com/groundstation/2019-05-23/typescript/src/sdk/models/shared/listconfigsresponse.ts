import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigListItem } from "./configlistitem";


// ListConfigsResponse
/** 
 * <p/>
**/
export class ListConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configList", elemType: shared.ConfigListItem })
  configList?: ConfigListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
