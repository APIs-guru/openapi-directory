import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeIdentityProviderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProviderName" })
  providerName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
