import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents the authorizations granted to aggregator accounts and regions.
**/
export declare class AggregationAuthorization extends SpeakeasyBase {
    aggregationAuthorizationArn?: string;
    authorizedAccountId?: string;
    authorizedAwsRegion?: string;
    creationTime?: Date;
}
