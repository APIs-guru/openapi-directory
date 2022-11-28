import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";



export class DisassociateClientVpnTargetNetworkResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  status?: AssociationStatus;
}
