import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigListItem } from "./configlistitem";



// ListConfigsResponse
/** 
 * <p/>
**/
export class ListConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configList", elemType: ConfigListItem })
  configList?: ConfigListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
