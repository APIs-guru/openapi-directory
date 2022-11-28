import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
/**
 * Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
**/
export declare class GetConnectionsFilter extends SpeakeasyBase {
    connectionType?: ConnectionTypeEnum;
    matchCriteria?: string[];
}
