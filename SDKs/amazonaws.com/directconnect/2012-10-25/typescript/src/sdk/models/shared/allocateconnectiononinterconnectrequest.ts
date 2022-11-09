import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllocateConnectionOnInterconnectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @Metadata({ data: "json, name=connectionName" })
  connectionName: string;

  @Metadata({ data: "json, name=interconnectId" })
  interconnectId: string;

  @Metadata({ data: "json, name=ownerAccount" })
  ownerAccount: string;

  @Metadata({ data: "json, name=vlan" })
  vlan: number;
}
