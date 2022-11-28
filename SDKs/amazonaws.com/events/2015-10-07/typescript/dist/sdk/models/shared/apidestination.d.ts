import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
/**
 * Contains details about an API destination.
**/
export declare class ApiDestination extends SpeakeasyBase {
    apiDestinationArn?: string;
    apiDestinationState?: ApiDestinationStateEnum;
    connectionArn?: string;
    creationTime?: Date;
    httpMethod?: ApiDestinationHttpMethodEnum;
    invocationEndpoint?: string;
    invocationRateLimitPerSecond?: number;
    lastModifiedTime?: Date;
    name?: string;
}
