import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class AllocateHostedConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=connectionName" })
  connectionName: string;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=vlan" })
  vlan: number;
}
