import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";
/**
 * Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
**/
export declare class SupportedEndpointType extends SpeakeasyBase {
    endpointType?: ReplicationEndpointTypeValueEnum;
    engineDisplayName?: string;
    engineName?: string;
    replicationInstanceEngineMinimumVersion?: string;
    supportsCdc?: boolean;
}
