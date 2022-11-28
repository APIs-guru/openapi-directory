import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";
import { VpcConfiguration } from "./vpcconfiguration";



export class CreateHostInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
