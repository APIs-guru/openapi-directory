import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateHostedConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=parentConnectionId" })
  parentConnectionId: string;
}
