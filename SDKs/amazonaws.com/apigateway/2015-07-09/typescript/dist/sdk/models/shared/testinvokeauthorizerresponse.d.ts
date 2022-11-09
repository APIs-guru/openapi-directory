import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents the response of the test invoke request for a custom <a>Authorizer</a>
**/
export declare class TestInvokeAuthorizerResponse extends SpeakeasyBase {
    authorization?: Map<string, string[]>;
    claims?: Map<string, string>;
    clientStatus?: number;
    latency?: number;
    log?: string;
    policy?: string;
    principalId?: string;
}
