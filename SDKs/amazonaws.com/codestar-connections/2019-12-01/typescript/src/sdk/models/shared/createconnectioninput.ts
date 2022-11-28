import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";



export class CreateConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName: string;

  @SpeakeasyMetadata({ data: "json, name=HostArn" })
  hostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
