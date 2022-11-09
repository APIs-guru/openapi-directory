import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationStateEnum } from "./apidestinationstateenum";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
export declare class DescribeApiDestinationResponse extends SpeakeasyBase {
    apiDestinationArn?: string;
    apiDestinationState?: ApiDestinationStateEnum;
    connectionArn?: string;
    creationTime?: Date;
    description?: string;
    httpMethod?: ApiDestinationHttpMethodEnum;
    invocationEndpoint?: string;
    invocationRateLimitPerSecond?: number;
    lastModifiedTime?: Date;
    name?: string;
}
