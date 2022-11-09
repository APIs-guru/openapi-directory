import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object representing authorization data for an Amazon ECR registry.
**/
export declare class AuthorizationData extends SpeakeasyBase {
    authorizationToken?: string;
    expiresAt?: Date;
    proxyEndpoint?: string;
}
