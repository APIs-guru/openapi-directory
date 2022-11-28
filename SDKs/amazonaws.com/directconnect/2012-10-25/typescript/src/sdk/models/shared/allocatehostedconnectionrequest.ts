import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class AllocateHostedConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=connectionName" })
  connectionName: string;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan: number;
}
