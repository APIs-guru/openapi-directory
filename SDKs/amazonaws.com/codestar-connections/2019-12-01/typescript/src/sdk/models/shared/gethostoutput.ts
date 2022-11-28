import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { VpcConfiguration } from "./vpcconfiguration";



export class GetHostOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
