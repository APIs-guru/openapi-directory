import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigurationItem } from "./configurationitem";


// GetResourceConfigHistoryResponse
/** 
 * The output for the <a>GetResourceConfigHistory</a> action.
**/
export class GetResourceConfigHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationItems", elemType: shared.ConfigurationItem })
  configurationItems?: ConfigurationItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
