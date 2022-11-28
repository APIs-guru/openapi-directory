import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderConfigResponse } from "./identityproviderconfigresponse";



export class DescribeIdentityProviderConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityProviderConfig" })
  identityProviderConfig?: IdentityProviderConfigResponse;
}
