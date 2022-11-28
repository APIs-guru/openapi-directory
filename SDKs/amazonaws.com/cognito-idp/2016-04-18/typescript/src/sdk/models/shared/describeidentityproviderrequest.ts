import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeIdentityProviderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
