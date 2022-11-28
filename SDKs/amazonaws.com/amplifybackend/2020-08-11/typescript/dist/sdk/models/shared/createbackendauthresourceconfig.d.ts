import { SpeakeasyBase } from "../../../internal/utils";
import { AuthResourcesEnum } from "./authresourcesenum";
import { CreateBackendAuthIdentityPoolConfig } from "./createbackendauthidentitypoolconfig";
import { ServiceEnum } from "./serviceenum";
import { CreateBackendAuthUserPoolConfig } from "./createbackendauthuserpoolconfig";
/**
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export declare class CreateBackendAuthResourceConfig extends SpeakeasyBase {
    authResources: AuthResourcesEnum;
    identityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;
    service: ServiceEnum;
    userPoolConfigs: CreateBackendAuthUserPoolConfig;
}
