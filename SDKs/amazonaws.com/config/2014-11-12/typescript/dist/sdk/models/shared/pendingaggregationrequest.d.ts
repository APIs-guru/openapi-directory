import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
**/
export declare class PendingAggregationRequest extends SpeakeasyBase {
    requesterAccountId?: string;
    requesterAwsRegion?: string;
}
