import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";



// GetConnectionsFilter
/** 
 * Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
**/
export class GetConnectionsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];
}
