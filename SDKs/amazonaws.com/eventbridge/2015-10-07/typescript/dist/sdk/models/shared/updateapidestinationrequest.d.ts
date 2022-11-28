import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
export declare class UpdateApiDestinationRequest extends SpeakeasyBase {
    connectionArn?: string;
    description?: string;
    httpMethod?: ApiDestinationHttpMethodEnum;
    invocationEndpoint?: string;
    invocationRateLimitPerSecond?: number;
    name: string;
}
