import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RefreshSchemasStatusTypeValueEnum } from "./refreshschemasstatustypevalueenum";
/**
 * Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
**/
export declare class RefreshSchemasStatus extends SpeakeasyBase {
    endpointArn?: string;
    lastFailureMessage?: string;
    lastRefreshDate?: Date;
    replicationInstanceArn?: string;
    status?: RefreshSchemasStatusTypeValueEnum;
}
