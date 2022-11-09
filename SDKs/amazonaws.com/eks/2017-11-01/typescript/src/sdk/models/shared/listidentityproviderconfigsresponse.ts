import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityProviderConfig } from "./identityproviderconfig";


export class ListIdentityProviderConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityProviderConfigs", elemType: shared.IdentityProviderConfig })
  identityProviderConfigs?: IdentityProviderConfig[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
