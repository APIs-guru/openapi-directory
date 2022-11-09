import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateHostedConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=parentConnectionId" })
  parentConnectionId: string;
}
