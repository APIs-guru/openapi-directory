import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationItem } from "./configurationitem";



// GetResourceConfigHistoryResponse
/** 
 * The output for the <a>GetResourceConfigHistory</a> action.
**/
export class GetResourceConfigHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationItems", elemType: ConfigurationItem })
  configurationItems?: ConfigurationItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
