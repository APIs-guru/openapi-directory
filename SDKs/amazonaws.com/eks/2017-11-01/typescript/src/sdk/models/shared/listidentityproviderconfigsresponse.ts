import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderConfig } from "./identityproviderconfig";



export class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityProviderConfigs", elemType: IdentityProviderConfig })
  identityProviderConfigs?: IdentityProviderConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
