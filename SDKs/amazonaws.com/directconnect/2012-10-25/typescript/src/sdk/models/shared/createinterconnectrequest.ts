import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateInterconnectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @Metadata({ data: "json, name=interconnectName" })
  interconnectName: string;

  @Metadata({ data: "json, name=lagId" })
  lagId?: string;

  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
