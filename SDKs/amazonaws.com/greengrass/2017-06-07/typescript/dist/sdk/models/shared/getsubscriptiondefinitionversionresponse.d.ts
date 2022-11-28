import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDefinitionVersion } from "./subscriptiondefinitionversion";
export declare class GetSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: SubscriptionDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
