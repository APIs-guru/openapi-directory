import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiDestinationHttpMethodEnum } from "./apidestinationhttpmethodenum";
export declare class CreateApiDestinationRequest extends SpeakeasyBase {
    connectionArn: string;
    description?: string;
    httpMethod: ApiDestinationHttpMethodEnum;
    invocationEndpoint: string;
    invocationRateLimitPerSecond?: number;
    name: string;
}
