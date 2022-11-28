import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllocateConnectionOnInterconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @SpeakeasyMetadata({ data: "json, name=connectionName" })
  connectionName: string;

  @SpeakeasyMetadata({ data: "json, name=interconnectId" })
  interconnectId: string;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan: number;
}
