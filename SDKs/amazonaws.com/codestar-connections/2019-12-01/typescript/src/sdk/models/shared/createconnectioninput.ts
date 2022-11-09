import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProviderTypeEnum } from "./providertypeenum";
import { Tag } from "./tag";


export class CreateConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionName" })
  connectionName: string;

  @Metadata({ data: "json, name=HostArn" })
  hostArn?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
