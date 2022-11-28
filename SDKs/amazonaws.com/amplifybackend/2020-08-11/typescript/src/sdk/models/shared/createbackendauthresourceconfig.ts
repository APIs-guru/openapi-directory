import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthResourcesEnum } from "./authresourcesenum";
import { CreateBackendAuthIdentityPoolConfig } from "./createbackendauthidentitypoolconfig";
import { ServiceEnum } from "./serviceenum";
import { CreateBackendAuthUserPoolConfig } from "./createbackendauthuserpoolconfig";



// CreateBackendAuthResourceConfig
/** 
 * Defines the resource configuration when creating an auth resource in your Amplify project.
**/
export class CreateBackendAuthResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthResources" })
  authResources: AuthResourcesEnum;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolConfigs" })
  identityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service: ServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=UserPoolConfigs" })
  userPoolConfigs: CreateBackendAuthUserPoolConfig;
}
