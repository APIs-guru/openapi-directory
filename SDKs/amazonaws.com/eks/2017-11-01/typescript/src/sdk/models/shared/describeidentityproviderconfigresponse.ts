import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityProviderConfigResponse } from "./identityproviderconfigresponse";


export class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityProviderConfig" })
  identityProviderConfig?: IdentityProviderConfigResponse;
}
