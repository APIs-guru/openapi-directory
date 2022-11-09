import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";


// GetConnectionsFilter
/** 
 * Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
**/
export class GetConnectionsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];
}
