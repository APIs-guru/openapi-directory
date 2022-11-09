import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";
import { VpcConfiguration } from "./vpcconfiguration";


export class CreateHostInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ProviderEndpoint" })
  providerEndpoint: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType: ProviderTypeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration?: VpcConfiguration;
}
