import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthResourcesEnum } from "./authresourcesenum";
import { CreateBackendAuthIdentityPoolConfig } from "./createbackendauthidentitypoolconfig";
import { ServiceEnum } from "./serviceenum";
import { CreateBackendAuthUserPoolConfig } from "./createbackendauthuserpoolconfig";


// CreateBackendAuthResourceConfig
/** 
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export class CreateBackendAuthResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthResources" })
  authResources: AuthResourcesEnum;

  @Metadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  @Metadata({ data: "json, name=Service" })
  service: ServiceEnum;

  @Metadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs: CreateBackendAuthUserPoolConfig;
}
